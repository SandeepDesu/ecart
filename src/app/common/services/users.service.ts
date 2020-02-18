import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { USERS_URL } from '@common/constants/api.constants';
import { User } from '@common/models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  registerUser(body: User): Observable<any> {
    return this.http.post<any>(USERS_URL, body);
  }
}
