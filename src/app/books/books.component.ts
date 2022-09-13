import { Component, OnInit } from '@angular/core';
import { Book } from '../type/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  isShow:boolean = false;
  listBooks: Book[] = [];
  constructor(private booksService: BooksService) { }
  ngOnInit(): void {
    this.listBooks = this.booksService.getBook()
  }
  handleClickShow(){
    this.isShow = true;
  }
  handleClickHiden(){
    this.isShow = false;
  }


}
