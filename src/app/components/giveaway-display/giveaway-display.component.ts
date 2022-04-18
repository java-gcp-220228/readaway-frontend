import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Giveaway } from 'src/app/interfaces/giveaway';
import { GiveawayService } from 'src/app/services/giveaway.service';
import { BookSearchService } from 'src/app/services/book-search.service';



@Component({
  selector: 'app-giveaway-display',
  templateUrl: './giveaway-display.component.html',
  styleUrls: ['./giveaway-display.component.css']
})
export class GiveawayDisplayComponent implements OnInit {


  giveawayRouteId: number;
  currentGiveaway!: Giveaway;
  backgroundImg: string;
  giveawayWinner: string | null;
  createTime: string;

  constructor(private giveawayService: GiveawayService, private route:ActivatedRoute,
     private router:Router, private bookSearch:BookSearchService) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.giveawayRouteId = +params.get('id');
    })
    this.giveawayService.getGiveawayById(this.giveawayRouteId).subscribe((giveaway)=>{
        
        this.currentGiveaway = giveaway;
        this.createTime = new Date(giveaway.startTime).toLocaleString();
        this.bookSearch.searchISBN(giveaway.isbn).subscribe((title) => {
          this.currentGiveaway.book_title = title.title;
        });
        this.backgroundImg = 'https://covers.openlibrary.org/b/isbn/' + this.currentGiveaway.isbn + '-L.jpg?default=false';
        this.giveawayWinner = giveaway.winner.username;
    
      },
    (error: HttpErrorResponse) => {
      this.router.navigate(['/not-found']);
    });
  }

}