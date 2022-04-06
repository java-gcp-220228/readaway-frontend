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
  login(username: string, password: string) {
    //function to authenticate user
  }

  logout() {
    // need to navigate to home page on logout
  }

  register() {
    //function to add new user, post request
  }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`)
  }
}
