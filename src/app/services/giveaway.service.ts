import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiveawayService {

  http: HttpClient;

  url: string = "http://localhost:8081/giveaways"

  constructor(httpClient: HttpClient) { 
    this.http = httpClient;
  }

  getAllGiveaways() {
    return this.http.get(this.url, {});
  }

  getGiveawayById(id: number | null) {
    return this.http.get(`${this.url}/${id}`)

  }
}
