import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AppComponent, CartComponent, InputComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
