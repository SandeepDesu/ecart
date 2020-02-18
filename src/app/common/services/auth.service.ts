import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AUTH_URL } from '@common/constants/api.constants';
import { LOCAL_STORAGE_KEYS } from '@common/constants/app.constants';
import { setValueToLocalStorage } from '@common/utils/web.utils';
import { User } from '@common/models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  auth(user): Observable<User> {
    return this.http.post<User>(AUTH_URL, user).pipe(
      map((result: any) => {
        setValueToLocalStorage(LOCAL_STORAGE_KEYS.TOKEN, result.token);
        setValueToLocalStorage(LOCAL_STORAGE_KEYS.USER, JSON.stringify(result.details));
        return result.details;
      })
    );
  }
}
