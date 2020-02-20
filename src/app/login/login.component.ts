import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@common/services/auth.service';

import { USER_ROLES } from '@common/constants/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  }
  constructor(private authService: AuthService, private router: Router) { }

  signIn() {
    this.authService.auth(this.user).subscribe((response) => {
      switch (response.role) {
        case USER_ROLES.USER:
          this.router.navigate(['/user']);
          break;
        case USER_ROLES.ADMIN:
          this.router.navigate(['/admin']);
          break;
        default:
          this.user = {
            username: '',
            password: ''
          }
          break;
      }
    });
  }

}
