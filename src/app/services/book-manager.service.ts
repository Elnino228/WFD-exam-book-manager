import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../models/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookManagerService {
  API_URL = environment.url;

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.API_URL);
  }

  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(Location.joinWithSlash(this.API_URL, id + ''));
  }

  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(Location.joinWithSlash(this.API_URL, book.id + ''), book);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.API_URL, book);
  }

  deleteBook(id): Observable<IBook> {
    return this.http.delete<IBook>(Location.joinWithSlash(this.API_URL, id + ''));
  }
}
