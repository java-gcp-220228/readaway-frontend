import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/User';
import { environment } from '../../environments/environment'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  http: HttpClient;

  registerErrorSubject: Subject<string> = new Subject<string>();

  constructor(http: HttpClient, private router: Router) {  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate([' ']);
  }

  register(email: string, username: string, password: string) {
    this.http.post<User>(`${environment.apiUrl}/register`, { email: email, username: username, password: password},
    {
      'observe': 'response',
      'headers': { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
    .subscribe(res => {
      const jwt = res.headers.get('token');
      localStorage.setItem('jwt', jwt);

      localStorage.setItem('user_info', JSON.stringify(res.body));
      console.log(sessionStorage.getItem('user_info'));
      this.router.navigate(['profile']);
    }, err => {
      const errorMessage = err.error;
      this.registerErrorSubject.next(errorMessage);
    });
  }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`)
  }
}
