import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserInfo } from '../interfaces/UserInfo';
import { User } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  url: string = "http://34.125.87.37:2000";

  loginErrorSubject: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) { }

  getUserInfoFromJwt(): Observable<HttpResponse<UserInfo>> {
    return this.http.get<UserInfo>(`http://34.125.87.37:2000/test`, {
      'observe': 'response',
      'headers': {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    });
  }

  login(username: string, password: string) {
    this.http.post<User>(`http://34.125.87.37:2000/login`, {'username': username, 'password': password},
    {
      'observe': 'response',
      'headers': { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
    .subscribe(res => {
      const jwt = res.headers.get('token');
      localStorage.setItem('jwt', jwt);

      localStorage.setItem('user_id', res.body.id.toString());
      localStorage.setItem('username', res.body.username);
      let user : UserInfo = {
        "userId" : res.body.id,
        "username" : res.body.username,
        "email" : res.body.email
      }
      localStorage.setItem('user_info', user.toString());
      this.getLoggedInName.emit('Sign In');
      this.router.navigate(['profile']);
    }, err => {
      const errorMessage = err.error;
      this.loginErrorSubject.next(errorMessage);

    });
  }
}