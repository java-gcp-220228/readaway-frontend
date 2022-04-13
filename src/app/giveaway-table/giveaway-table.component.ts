import { Component, OnInit } from '@angular/core';
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

  constructor(private giveawayService: GiveawayService) { // private giveawayService:GiveawayService 
    
  }

  ngOnInit(): void {
    this.giveawayService.getAllGiveaways().subscribe(data => {
      console.log(data);
    })
  }
}