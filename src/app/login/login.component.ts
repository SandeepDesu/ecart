import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@common/services/auth.service';

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
    this.authService.auth(this.user).subscribe(() => {
      this.router.navigate(['/user']);
    });
  }

}
