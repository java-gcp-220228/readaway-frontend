import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Giveaway } from '../interfaces/giveaway';

@Injectable({
  providedIn: 'root'
})
export class GiveawayService {

  http: HttpClient;

  url: string = "http://34.125.87.37:2000/giveaways"

  constructor(httpClient: HttpClient) { 
    this.http = httpClient;
  }

  getAllGiveaways(): Observable<Giveaway[]> {
    return this.http.get<Giveaway[]>(this.url, {});
  }

  getGiveawayById(id: number): Observable<Giveaway> {
    return this.http.get<Giveaway>(`${this.url}/${id}`)

  }

  getGiveawayByCreatorId(id: number): Observable<Giveaway[]> {
    return this.http.get<Giveaway[]>(`http://34.125.87.37:2000/users/${id}/giveaways`)
  }

  getGiveawaysByWinnerId(id: number) : Observable<Giveaway[]> {
    return this.http.get<Giveaway[]>(`${this.url}/winners/${id}`)
  }

  addGiveaway(giveaway: Giveaway) {
    this.http.post(this.url, giveaway, {
      'observe': 'response',
      'headers': { Authorization: `Bearer ${localStorage.getItem('jwt')}`}
    }).subscribe();
  }

  enterGiveaway(userId: number, giveawayId: number) {
    this.http.post(`${this.url}/${giveawayId}/entries/${userId}`, {}, {
      'observe': 'response',
      'headers': { Authorization: `Bearer ${localStorage.getItem('jwt')}`}
    }).subscribe();
  }

}
