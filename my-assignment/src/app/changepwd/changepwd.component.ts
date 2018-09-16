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
