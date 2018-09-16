import { Component, OnInit, ViewChild } from '@angular/core';
import { Change } from './change.model';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  changemodel: Change = new Change();
  @ViewChild('changeForm') form:any;
  @ViewChild('newpwd') newpwd;
  @ViewChild('cnfpwd') cnfpwd;
  message:string;
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

  onCheck(){
    if(this.newpwd !== this.cnfpwd){
      this.show = true;
      this.message = "The new password and confirm password do not match!"
      return this.show;
    }

  }

}
