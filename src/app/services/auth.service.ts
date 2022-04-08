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

  loginErrorSubject: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) { }

  getUserInfoFromJwt(): Observable<HttpResponse<UserInfo>> {
    return this.http.get<UserInfo>(`${environment.apiUrl}/test`, {
      'observe': 'response',
      'headers': {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    });
  }

  login(username: string, password: string) {
    this.http.post<User>(`${environment.apiUrl}/login`, {'username': username, 'password': password},
    {
      'observe': 'response',
      'headers': { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
    .subscribe(res => {
      const jwt = res.headers.get('token');
      localStorage.setItem('jwt', jwt);

      sessionStorage.setItem('user_info', JSON.stringify(res.body));
      console.log(sessionStorage.getItem('user_info'));
      this.router.navigate(['profile']);
    }, err => {
      const errorMessage = err.error;
      this.loginErrorSubject.next(errorMessage);

    });
  }
}