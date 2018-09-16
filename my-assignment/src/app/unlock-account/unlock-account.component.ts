import { Component, OnInit, ViewChild } from '@angular/core';
import { Unlock } from './unlock.model';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent implements OnInit {

  unlockmodel:Unlock = new Unlock();
  @ViewChild('unlockForm') form: any;

  

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.form.valid){
      console.log("Form Submitted!!!");
      this.form.reset();
    }
  }
}
