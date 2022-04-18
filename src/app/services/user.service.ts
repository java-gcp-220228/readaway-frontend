import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url: string = "http://34.125.87.37:2000";
  @Output() getRegisterUser: EventEmitter<any> = new EventEmitter();

  registerErrorSubject: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate([' ']);
  }

  register(email: string, username: string, password: string) {
    this.http.post<User>(`http://34.125.87.37:2000/register`, { email: email, username: username, password: password},
    {
      'observe': 'response',
      'headers': { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
    .subscribe(res => {
      const jwt = res.headers.get('token');
      localStorage.setItem('jwt', jwt);

      localStorage.setItem('user_id', res.body.id.toString());
      this.getRegisterUser.emit('Register User');
      this.router.navigate(['giveaways']);
    }, err => {
      const errorMessage = err.error;
      this.registerErrorSubject.next(errorMessage);
    });
  }

  getAllUsers() {
    return this.http.get<User[]>(`http://34.125.87.37:2000/users`)
  }
}