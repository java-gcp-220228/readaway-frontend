import { Component, Input, OnInit } from '@angular/core';
import { GiveawayService } from 'src/app/services/giveaway.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giveaway-timer',
  templateUrl: './giveaway-timer.component.html',
  styleUrls: ['./giveaway-timer.component.css']
})
export class GiveawayTimerComponent implements OnInit {

  @Input() endTimestamp: number;
  @Input() giveawayId: number;

  days: number;
  hours: number;
  mins: number;
  seconds: number;

  x = setInterval(()=> {
    let difference: number = this.endTimestamp - Date.now();

    this.days = Math.floor(difference/1000/60/60/24);

    difference -= this.days*1000*60*60*24;

    this.hours = Math.floor(difference/1000/60/60);
    difference -= this.hours*1000*60*60;

    this.mins = Math.floor(difference/1000/60);
    difference -= this.mins*1000*60;

    this.seconds = Math.floor(difference/1000);
    
    if(difference <= 0 ) {
      clearInterval(this.x);
      this.declareWinner();
    }
   
  }, 1000);

  constructor(private giveawayService: GiveawayService, private router: Router) { }

  ngOnInit(): void {
  }

  declareWinner(){
    this.giveawayService.declareWinner(this.giveawayId);
    this.router.navigate([`/giveaways/${this.giveawayId}`]);
  }



}
