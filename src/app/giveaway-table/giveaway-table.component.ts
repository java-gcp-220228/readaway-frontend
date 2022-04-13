import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Giveaway } from '../interfaces/giveaway';
import { User } from '../interfaces/User';
import { AuthService } from '../services/auth.service';
import { GiveawayService } from '../services/giveaway.service';

// interface FakeGiveaway {
//   id: Number;
//   name: String,
//   username: String,
//   email: String
// }

@Component({
  selector: 'app-giveaway-table',
  templateUrl: './giveaway-table.component.html',
  styleUrls: ['./giveaway-table.component.css']
})
export class GiveawayTableComponent implements OnInit {

  url = 'http://localhost:8081/giveaways';

   giveaways: Giveaway[] = [] ;
  
  constructor(private http: HttpClient) { // private giveawayService:GiveawayService 
    
  }

  ngOnInit(): void {
    this.http.get<Giveaway[]>(this.url).subscribe(res => {
      this.giveaways = res
      console.log(this.giveaways)
    })
  }
}

