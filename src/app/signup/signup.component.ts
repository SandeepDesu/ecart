import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@common/services/users.service';
import { User } from '@common/models/users';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user: User = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    username: '',
    password: '',
    address: ''
  };
  isError = false;
  constructor(private usersService: UsersService, private route: Router) { }
  signUp() {
    this.usersService.registerUser(this.user).subscribe(result => {
      if (result && result.message === 'success') {
        this.route.navigate(['/login']);
      } else {
        this.isError = true;
      }
    });
  }
}
