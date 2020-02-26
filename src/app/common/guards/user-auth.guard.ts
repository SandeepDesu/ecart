import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { getValueFromLocalStorage } from '@common/utils/web.utils';
import { LOCAL_STORAGE_KEYS, USER_ROLES } from '@common/constants/app.constants';

@Injectable()
export class UserAuthGuard implements CanActivate, CanLoad {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userDetails = getValueFromLocalStorage(LOCAL_STORAGE_KEYS.USER);
    let isValidUser = false;
    if (userDetails !== 'undefined') {
      const user = JSON.parse(userDetails);
      if (user && user.role === USER_ROLES.USER) {
        isValidUser = true;
      }
    }
    return isValidUser;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
