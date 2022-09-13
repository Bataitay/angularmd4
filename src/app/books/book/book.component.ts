import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../type/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  isIncart:boolean = false;
  @Input() book: Book= {} as Book;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart() {
    this.isIncart = true;
    this.cartService.add(this.book);
  }
  removeFromcart(){
    this.isIncart = false;
    this.cartService.remove(this.book)
  }
  

}
