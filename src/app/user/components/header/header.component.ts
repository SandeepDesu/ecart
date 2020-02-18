import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { clearBrowserStorage } from '@common/utils/web.utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItemsNumber = 0;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartService.displayItems.subscribe((value: number) => {
      this.cartItemsNumber = value;
    });
  }

  logout() {
    clearBrowserStorage();
    this.router.navigate(['/login']);
  }
}
