import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginmodel: Login = new Login();
  @ViewChild('loginForm') form: any;


  type = "password";
  show: boolean;

  constructor() {
    this.show = false;
   }

  ngOnInit() {
  }

  onSubmit(){
    if(this.form.valid){
      console.log("Form Submitted!!!");
      this.form.reset();
    }
  }

  viewPassword(){
    this.show = !this.show;
 }
}
