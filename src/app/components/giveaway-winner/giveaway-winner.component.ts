import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-giveaway-winner',
  templateUrl: './giveaway-winner.component.html',
  styleUrls: ['./giveaway-winner.component.css']
})
export class GiveawayWinnerComponent implements OnInit {

  giveawayRouteId: number;
  rerouteLink :string; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.giveawayRouteId = +params.get('id');
      this.rerouteLink = `/giveaways/${this.giveawayRouteId}`
    })
  }

}
