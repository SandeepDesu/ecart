import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { getValueFromLocalStorage } from '@common/utils/web.utils';
import { LOCAL_STORAGE_KEYS } from '@common/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = getValueFromLocalStorage(LOCAL_STORAGE_KEYS.TOKEN);
    let authReq;
    if (authToken) {
       // Clone the request and set the new header in one step.
      authReq = req.clone({ setHeaders: { 'x-access-token': authToken } });
    } else {
      authReq = req.clone();
    }
    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
