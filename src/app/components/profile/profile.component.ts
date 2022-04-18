import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Giveaway } from 'src/app/interfaces/giveaway';
import { BookSearchService } from 'src/app/services/book-search.service';
import { GiveawayService } from 'src/app/services/giveaway.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number = +localStorage.getItem('user_id');
  wonGiveaways: Giveaway[] = [];
  createdGiveaways: Giveaway[] = [];
  username: string;
  expandWins: boolean = false;
  expandCreated: boolean = false;



  constructor(private giveawayService: GiveawayService, private router: Router, private bookSearch:BookSearchService) { 
  }
  ngOnInit(): void {
    console.log(this.expandWins);
    this.giveawayService.getGiveawayByCreatorId(this.id).subscribe((giveaways) => {
      
      for( let data of giveaways) {
        this.bookSearch.searchISBN(data.isbn).subscribe((title) => {
          data.book_title = title.title;
        });
        data.isbn = 'https://covers.openlibrary.org/b/isbn/' + data.isbn + '-M.jpg?default=false';
        this.createdGiveaways.push(data);
      }     
    });

    this.giveawayService.getGiveawaysByWinnerId(this.id).subscribe((giveaways) => {
      
      for( let data of giveaways) {
        this.bookSearch.searchISBN(data.isbn).subscribe((title) => {
          data.book_title = title.title;
        });
        data.isbn = 'https://covers.openlibrary.org/b/isbn/' + data.isbn + '-M.jpg?default=false';
        this.wonGiveaways.push(data);
      }     
    });
    this.username = localStorage.getItem('username');
    if (this.username) {
        return;
    } else {
      this.router.navigate(['login']);
    }

  }

  giveawayDisplay(giveawayid: number) {
    this.router.navigate([`/giveaways/${giveawayid}`]);
  }

  toggleShowWins() {
    this.expandWins = !this.expandWins;
  }
  
  toggleShowCreates() {
    this.expandCreated = !this.expandCreated;
  }
}
  

