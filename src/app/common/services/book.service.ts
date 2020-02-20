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

  postBook(book: Book): Observable<any> {
    return this.http.post(BOOKS_URL, book);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${BOOKS_URL}/${id}`);
  }

  updateBookById(book: Book): Observable<Book> {
    return this.http.put<Book>(`${BOOKS_URL}/${book._id}`, book);
  }
}
