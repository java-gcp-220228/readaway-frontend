import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookSearchService } from 'src/app/services/book-search.service';
import { Giveaway } from '../../interfaces/giveaway';
import { User } from '../../interfaces/User';
import { AuthService } from '../../services/auth.service';
import { GiveawayService } from '../../services/giveaway.service';

@Component({
  selector: 'app-giveaway-table',
  templateUrl: './giveaway-table.component.html',
  styleUrls: ['./giveaway-table.component.css']
})
export class GiveawayTableComponent implements OnInit {

  giveaways: Giveaway[] = [];
  book_title: string[];

  constructor(private giveawayService:GiveawayService, private router:Router, private bookSearch:BookSearchService) { 
  
  }

  ngOnInit(): void {
    this.giveawayService.getAllGiveaways().subscribe((giveaways) => {
      
      for( let data of giveaways) {      
        this.bookSearch.searchISBN(data.isbn).subscribe((title) => {
          data.book_title = title.title;
        });
        data.isbn = 'https://covers.openlibrary.org/b/isbn/' + data.isbn + '-M.jpg?default=false';
        this.giveaways.push(data);
        
      }     
    });

    
  }

  giveawayDisplay(giveawayid: number) {
    this.router.navigate([`/giveaways/${giveawayid}`]);
  }
}

