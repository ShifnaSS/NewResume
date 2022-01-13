import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NotsModel } from './nots.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  nots : NotsModel[];
  constructor(private _add:UserService,private router :Router) {
    this.nots = [];
   }
  
  ngOnInit(): void {
    this._add.getnot()
    .subscribe((data)=>{
      this.nots=JSON.parse(JSON.stringify(data));
    })
  }

}
