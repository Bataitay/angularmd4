import { Component } from '@angular/core';
import { CartService } from './cart/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_add_to_cart';
  constructor(private cartService: CartService) { }

  amountcart() {
    return this.cartService.get();
  }

}
