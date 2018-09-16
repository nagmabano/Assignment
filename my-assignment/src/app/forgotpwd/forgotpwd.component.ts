import { Component, OnInit, ViewChild } from '@angular/core';
import { Forget } from './forget.model';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  forgotmodel: Forget = new Forget();
  @ViewChild('forgetForm') form: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.form.valid){
      console.log("form submitted!!!")
      this.form.reset();
    }
  }

}
