import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

   getBooksByTitle(title: string): Observable<Book[]> {
     return this.http.get<Book[]>(`https://openlibrary.org/search.json?title=${title}`, {})
   }
}
