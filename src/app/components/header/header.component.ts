import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: string;
  registered: string;


  constructor(private authService: AuthService, private userService: UserService) {
    this.authService.getLoggedInName.subscribe(userIn => this.signIn(userIn));
    this.userService.getRegisterUser.subscribe(res => this.register(res));
   }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user_id');
  }

  signIn(userIn: string) : void {
    this.userId = userIn;
  }

  register(res: string) :void {
    this.registered = res;
  }
  logout() {
    this.userId = null;
    sessionStorage.clear();
  }
}
