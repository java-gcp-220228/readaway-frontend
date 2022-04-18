import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private http: HttpClient) { }

  search(bookSearchInput: string): Observable<any> {
    return this.http.get(`https://openlibrary.org/search.json?title=${encodeURIComponent(bookSearchInput)}`, {headers:{skip:"true"}});
  }

  searchISBN(isbn: string): Observable<any> {
    return this.http.get(`https://openlibrary.org/isbn/${isbn}.json`, {headers:{skip:"true"}});
  }
}
