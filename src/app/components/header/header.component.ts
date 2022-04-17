import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: string;


  constructor(private authService: AuthService) {
    this.authService.getLoggedInName.subscribe(userIn => this.signIn(userIn));
   }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user_id');
  }

  signIn(userIn: string) : void {
    this.userId = userIn;
  }
  logout() {
    this.userId = null;
    sessionStorage.clear();
  }
}
