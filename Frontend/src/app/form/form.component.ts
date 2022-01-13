import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _add:UserService) { }
UserData :any;
  ngOnInit(): void {
    let userid = localStorage.getItem("user_Id");
    this._add.getUser(userid).subscribe((data)=>{
      this.UserData=JSON.parse(JSON.stringify(data));
  })
  }

}
