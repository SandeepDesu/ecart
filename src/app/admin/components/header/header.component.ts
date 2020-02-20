import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clearBrowserStorage } from '@common/utils/web.utils';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    clearBrowserStorage();
    this.router.navigate(['/login']);
  }

}
