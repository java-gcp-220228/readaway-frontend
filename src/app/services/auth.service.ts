import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //use sessionStorage or localstorage?
  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login`, {username: username, password: password})
    .pipe(map(userData =>{
      localStorage.setItem("username", username);
      let tokenStr = "Bearer " + userData.token;
      localStorage.setItem("token", tokenStr);
      return userData;
    }));
  }
}
