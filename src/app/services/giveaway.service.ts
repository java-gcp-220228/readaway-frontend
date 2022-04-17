import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Giveaway } from '../interfaces/giveaway';

@Injectable({
  providedIn: 'root'
})
export class GiveawayService {

  http: HttpClient;

  url: string = "http://localhost:8081/giveaways"

  constructor(httpClient: HttpClient) { 
    this.http = httpClient;
  }

  getAllGiveaways(): Observable<Giveaway[]> {
    return this.http.get<Giveaway[]>(this.url, {});
  }

  getGiveawayById(id: number): Observable<Giveaway> {
    return this.http.get<Giveaway>(`${this.url}/${id}`)

  }


  enterGiveaway(userId: number, giveawayId: number) {
    this.http.post(`${this.url}/${giveawayId}`, userId)
  }

  addGiveaway(giveaway: Giveaway) {
    
  }
}
