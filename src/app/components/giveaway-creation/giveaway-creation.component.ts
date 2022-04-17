import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/services/book-search.service';
import { GiveawayService } from 'src/app/services/giveaway.service';
import { Giveaway } from 'src/app/interfaces/giveaway';

@Component({
  selector: 'app-giveaway-creation',
  templateUrl: './giveaway-creation.component.html',
  styleUrls: ['./giveaway-creation.component.css']
})
export class GiveawayCreationComponent implements OnInit {
  bookSearchInput!: string;
  endTime!: string;
  bookDataItems: any[] = [];
  selectedIsbn!: string;

  constructor(private bookSearchService: BookSearchService, private giveawayService: GiveawayService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.bookDataItems = [];
    this.selectedIsbn = '';
    this.bookSearchService.search(this.bookSearchInput).subscribe((response) => {
      for(let i = 0; i < 5; i++) {
        this.bookDataItems.push(response.docs[i]);
      }
    });
  }

  selectBook(bookData: any): void {
    this.selectedIsbn = bookData.isbn[0];
  }

  onSubmit(): void {
    if(!this.endTime || !this.selectedIsbn) {
      alert('Please select an end time and a book');
      return;
    }

    let giveaway: Giveaway = {
      "end_time": this.endTime,
      "isbn": this.selectedIsbn,
      "creator": {"user_id": +localStorage.getItem('user_id'), "username": localStorage.getItem('username')}
    }

    this.giveawayService.addGiveaway(giveaway);
  }

}
