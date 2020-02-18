import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpWrapperService {
  constructor(private http: HttpClient) { }
  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, body: Object): Observable<any> {
    return this.http.post(url, body);
  }
}
