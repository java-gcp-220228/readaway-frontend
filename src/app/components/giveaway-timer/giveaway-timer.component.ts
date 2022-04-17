import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { GiveawayService } from 'src/app/services/giveaway.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giveaway-timer',
  templateUrl: './giveaway-timer.component.html',
  styleUrls: ['./giveaway-timer.component.css']
})
export class GiveawayTimerComponent implements OnInit {

  @Input() endTimestamp: string;
  @Input() giveawayId: number;

  days: number;
  hours: number;
  mins: number;
  seconds: number;
  x: any;




  constructor(private giveawayService: GiveawayService, private router: Router) { 
  }

  ngOnInit(): void {
 
   
      this.x = setInterval(()=> {
      let d = new Date();
      let localTime = d.getTime();
      let localOffset = d.getTimezoneOffset() * 60000;
      let date = localTime + localOffset;
      let difference = Date.parse(this.endTimestamp) - date;
    
    

      this.days = Math.floor(difference/1000/60/60/24);
      difference -= this.days*1000*60*60*24;
  
      this.hours = Math.floor(difference/1000/60/60);
      difference -= this.hours*1000*60*60;
  
      this.mins = Math.floor(difference/1000/60);
      difference -= this.mins*1000*60;
  
      this.seconds = Math.floor(difference/1000);

      
      if(this.days < 0 ) {
        clearInterval(this.x);
        this.reloadPage();
      }
     
    }, 1000);
    
  }

  reloadPage() {
    // this.router.navigate([`giveaways/${this.giveawayId}`]);
    this.router.navigate([`giveaways/winner/${this.giveawayId}`])
  }
  ngOnDestroy() {
    clearInterval(this.x);
  }

}
