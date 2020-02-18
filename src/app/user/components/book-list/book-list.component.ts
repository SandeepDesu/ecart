import { Component, OnInit, OnDestroy } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookService } from '@common/services/book.service';
import { CartService } from '../../services/cart.service';

import { Book } from '@common/models/book';
import { User } from '@common/models/users';
import { Cart } from '@common/models/cart';

import { getValueFromLocalStorage } from '@common/utils/web.utils';
import { LOCAL_STORAGE_KEYS } from '@common/constants/app.constants';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  userDetails: User = JSON.parse(getValueFromLocalStorage(LOCAL_STORAGE_KEYS.USER));
  cartList: Cart;
  isLoading$ = new Subject();
  constructor(private bookService: BookService, private cartService: CartService) { }

  ngOnInit() {
    forkJoin(
      this.bookService.getBooks(),
      this.cartService.getCartList(this.userDetails._id)
    ).pipe(takeUntil(this.isLoading$))
      .subscribe(([bookList, cartlist]) => {
        this.books = bookList;
        this.cartList = cartlist;
        let items = 0;
        if (cartlist) {
          items = this.cartList.totalItems;
        }
        this.cartService.addItemsLength(items);
      });
  }

  addToCart(book) {
    if (this.cartList) {
      let isItemAvailabel = false;
      for (let itemsCount = 0; itemsCount < this.cartList.orders.length; itemsCount++) {
        if (this.cartList.orders[itemsCount].itemId === book._id) {
          this.cartList.orders[itemsCount].quantity++;
          isItemAvailabel = true;
          break;
        }
      }
      if (!isItemAvailabel) {
        this.cartList.orders.push({
          name: book.name,
          itemId: book._id,
          quantity: 1,
          cost: book.cost,
          currencyIn: book.currencyIn
        });
      }
    } else {
      this.cartList = {
        userId: this.userDetails._id,
        orders: [
          {
            name: book.name,
            itemId: book._id,
            quantity: 1,
            cost: book.cost,
            currencyIn: book.currencyIn
          }
        ]
      }
    };
    this.cartService.postCart(this.cartList).subscribe((result) => {
      this.cartList = result;
      this.cartService.addItemsLength(this.cartList.totalItems);
    });
  }

  ngOnDestroy() {
    this.isLoading$.next();
    this.isLoading$.complete();
  }
}
