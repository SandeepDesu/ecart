import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getValueFromLocalStorage } from '@common/utils/web.utils';
import { LOCAL_STORAGE_KEYS } from '@common/constants/app.constants';

@Injectable()
export class UserAuthGuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var userDetails = JSON.parse(getValueFromLocalStorage(LOCAL_STORAGE_KEYS.USER));
    if (userDetails && userDetails.role === 'user') {
      return true;
    }
    return false;
  }
}
