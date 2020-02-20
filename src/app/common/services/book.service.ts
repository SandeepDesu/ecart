import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '@common/models/book';
import { BOOKS_URL } from '@common/constants/api.constants';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(BOOKS_URL);
  }

  postBook(book): Observable<any> {
    return this.http.post(BOOKS_URL, book);
  }
}
