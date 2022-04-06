import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/services/book-search.service';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-giveaway-display',
  templateUrl: './giveaway-display.component.html',
  styleUrls: ['./giveaway-display.component.css']
})
export class GiveawayDisplayComponent implements OnInit {

  bookSearchService: BookSearchService;
  books: Book[] = [];

  constructor(bookSearchService: BookSearchService) {
    this.bookSearchService = bookSearchService; 

  }

  ngOnInit(): void {
  }

}
