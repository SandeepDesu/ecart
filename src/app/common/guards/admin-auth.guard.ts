import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getValueFromLocalStorage } from '@common/utils/web.utils';
import { LOCAL_STORAGE_KEYS, USER_ROLES } from '@common/constants/app.constants';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userDetails = getValueFromLocalStorage(LOCAL_STORAGE_KEYS.USER);
    let isValidUser = false;
    if (userDetails !== 'undefined') {
      const user = JSON.parse(userDetails);
      if (user && user.role === USER_ROLES.ADMIN) {
        isValidUser = true;
      }
    }
    return isValidUser;
  }
}
