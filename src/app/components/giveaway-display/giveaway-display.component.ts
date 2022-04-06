import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GiveawayService } from 'src/app/services/giveaway.service';

@Component({
  selector: 'app-giveaway-display',
  templateUrl: './giveaway-display.component.html',
  styleUrls: ['./giveaway-display.component.css']
})
export class GiveawayDisplayComponent implements OnInit {

  giveawayService: GiveawayService
  giveawayRouteId!: number | null;
  currentGiveaway: Object;

  constructor(giveawayService: GiveawayService, private route:ActivatedRoute) {
    this.giveawayService = giveawayService; 

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.giveawayRouteId = +params.get('id');
    })
    this.giveawayService.getGiveawayById(this.giveawayRouteId).subscribe((giveaway)=>{
      console.log(giveaway);
    })
  }

}
