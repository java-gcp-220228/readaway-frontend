import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserInfo } from '../interfaces/UserInfo';
import { User } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://34.125.87.37:2000";

  loginErrorSubject: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) { }

  getUserInfoFromJwt(): Observable<HttpResponse<UserInfo>> {
    return this.http.get<UserInfo>(`${this.url}/test`, {
      'observe': 'response',
      'headers': {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    });
  }

  login(username: string, password: string) {
    this.http.post<User>(`${this.url}/login`, {'username': username, 'password': password},
    {
      'observe': 'response',
      'headers': { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
    .subscribe(res => {
      const jwt = res.headers.get('token');
      localStorage.setItem('jwt', jwt);

      localStorage.setItem('user_id', res.body.id.toString());
      console.log(sessionStorage.getItem('user_info'));
      this.router.navigate(['profile']);
    }, err => {
      const errorMessage = err.error;
      this.loginErrorSubject.next(errorMessage);

    });
  }
}