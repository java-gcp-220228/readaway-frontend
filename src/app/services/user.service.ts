import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/User';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  http: HttpClient;

  subject: Subject<User> = new Subject<User>();

  constructor(http: HttpClient) {
    this.http = http;
  }

  // need backend functionality?
  logout() {
    // need to navigate to home page on logout
  }

  register() {
    return this.http.post
  }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`)
  }
}
