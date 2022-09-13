import { Component, OnInit } from '@angular/core';
import { registerForm } from 'src/app/type/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:registerForm = {
    email: '',
    password:'',
    confirmPassword:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    // console.log(this.form);
  }

}
