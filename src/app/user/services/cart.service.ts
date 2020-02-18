import { Injectable } from '@angular/core';
import { HttpWrapperService } from '@common/services/http-wrapper.service';
import { CART_URL } from '@common/constants/api.constants';
import { Cart } from '@common/models/cart';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CartService {
  public displayItems = new Subject();
  constructor(private http: HttpWrapperService) { }

  getCartList(id): Observable<Cart> {
    return this.http.get(`${CART_URL}/${id}`);
  }

  postCart(body) {
    return this.http.post(CART_URL, body);
  }

  addItemsLength(count) {
    this.displayItems.next(count);
  }

}
