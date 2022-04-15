import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: string;
  constructor() {
  
   }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user_id');
  }
  logout() {
    this.userId = null;
    sessionStorage.clear();
  }
}
