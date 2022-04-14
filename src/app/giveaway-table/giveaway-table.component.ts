import { Component, OnInit } from '@angular/core';
import { Url } from 'url';
import { Giveaway } from '../interfaces/giveaway';
import { User } from '../interfaces/User';
import { AuthService } from '../services/auth.service';
import { GiveawayService } from '../services/giveaway.service';

@Component({
  selector: 'app-giveaway-table',
  templateUrl: './giveaway-table.component.html',
  styleUrls: ['./giveaway-table.component.css']
})
export class GiveawayTableComponent implements OnInit {

// url = ???     Url = http://localhost:8081/giveaways;
   giveaways: any;

  constructor(private giveawayService:GiveawayService, http: Url) { 
  
  }

  ngOnInit(): void {
    this.giveaways = this.giveawayService.getAllGiveaways();
  }
}

