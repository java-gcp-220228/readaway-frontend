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

  logout() {
  }

  register() {
    // first check if username is available, then register user

    //fetch

    //post to register user
    // post to login
  }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`)
  }
}
