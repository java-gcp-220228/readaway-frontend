import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/services/book-search.service';

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

  constructor(private bookSearchService: BookSearchService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.bookDataItems = []
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

    // TODO create giveaway object and send to giveaway service
  }

}
