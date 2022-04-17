import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  @Input() bookData!: any;
  @Input() selectedIsbn!: string;
  title!: string;
  author!: string;
  isbn!: string;
  imageUrl!: string;

  constructor() { }

  ngOnInit(): void {
    this.title = this.bookData.title;
    this.author = this.bookData.author_name[0];
    this.isbn = this.bookData.isbn[0];
    this.imageUrl = "http://covers.openlibrary.org/b/isbn/" + this.isbn + "-M.jpg?default=false";
  }

}
