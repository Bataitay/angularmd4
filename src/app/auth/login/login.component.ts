import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/type/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: loginForm = {
    email:'',
    password:'',
  }
  isLoading:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    if(this.isLoading) return;
    this.isLoading = true;
    alert('hello');
  }

}
