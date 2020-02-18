import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItemsNumber = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.displayItems.subscribe((value:number) => {
      this.cartItemsNumber = value;
    });
  }
}
