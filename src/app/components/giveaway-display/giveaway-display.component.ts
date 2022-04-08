import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Giveaway } from 'src/app/interfaces/giveaway';
import { GiveawayService } from 'src/app/services/giveaway.service';

@Component({
  selector: 'app-giveaway-display',
  templateUrl: './giveaway-display.component.html',
  styleUrls: ['./giveaway-display.component.css']
})
export class GiveawayDisplayComponent implements OnInit {


  giveawayRouteId!: number | null;
  currentGiveaway!: Giveaway;

  constructor(private giveawayService: GiveawayService, private route:ActivatedRoute, private router:Router) {
    this.giveawayService = giveawayService; 

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.giveawayRouteId = +params.get('id');
    })
    this.giveawayService.getGiveawayById(this.giveawayRouteId).subscribe((giveaway)=>{

        this.currentGiveaway = giveaway;
    },
    (error: HttpErrorResponse) => {
      this.router.navigate(['/not-found']);
    });
  }

}
