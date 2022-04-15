import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: Object = {};

  constructor(private authService: AuthService, private router: Router) { 
   this.currentUser =  this.authService.getUserInfoFromJwt()
  }


  ngOnInit(): void {
    if(this.currentUser == null) {
      console.log('no user info')
    } else {console.log(this.currentUser)}
  }

  giveawayDisplay(giveawayid: number) {
    this.router.navigate([`/giveaways/${giveawayid}`]);
  }
}
  

