import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'src/app/interfaces/entry';
import { GiveawayService } from 'src/app/services/giveaway.service';

@Component({
  selector: 'app-giveaway-button',
  templateUrl: './giveaway-button.component.html',
  styleUrls: ['./giveaway-button.component.css']
})
export class GiveawayButtonComponent implements OnInit {

  @Input() entries: Entry[];
  @Input() giveawayId: number;
  @Input() giveawayWinner: string | null;

  entered: boolean = false;
  id: number = +localStorage.getItem('user_id');

  

  constructor(private giveawayService: GiveawayService) { }

  ngOnInit(): void {
    console.log(this.entries)
    
    for(let entry of this.entries) {
      if (this.id == entry.user_id) {
        this.entered = true;
      }
    }
  }

  enterGiveaway() {
    this.giveawayService.enterGiveaway(this.id, this.giveawayId);
    this.entered = true;

  }

}
