import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-templatehome',
  templateUrl: './templatehome.component.html',
  styleUrls: ['./templatehome.component.css']
})
export class TemplatehomeComponent implements OnInit {

  constructor(private _router:Router,private _add:UserService) { }
  UserData:any;
  session:any;
  userid:any
  ngOnInit(): void {
    this.userid = localStorage.getItem("userid")
    this.session =localStorage.getItem("session")
    this._add.getUser(this.userid)
    .subscribe((data)=>{
      this.UserData=JSON.parse(JSON.stringify(data));
    })
  }
  onetemp(){

    if(this.UserData){
      this._router.navigate(['/onetemp',this.userid])
    }
    else if(this.session=='adminsession'){
      this._router.navigate(['/onetemp1'])
    }
    else{
      this._router.navigate(['/profilehome'])
    }
  }
  twotemp(){
    if(this.UserData){
      this._router.navigate(['/twotemp',this.userid])
    }
    else if(this.session=='adminsession'){
      this._router.navigate(['/twotemp1'])
    }
    else{
      this._router.navigate(['/profilehome'])
    }
  }
  threetemp(){
    if(this.UserData){
      this._router.navigate(['/threetemp',this.userid])
    }
    else if(this.session=='adminsession'){
      this._router.navigate(['/threetemp1'])
    }
    else{
      this._router.navigate(['/profilehome'])
    }
  }
  fourtemp(){
    if(this.UserData){
      this._router.navigate(['/fourtemp',this.userid])
    }
    else if(this.session=='adminsession'){
      this._router.navigate(['/fourtemp1'])
    }
    else{
      this._router.navigate(['/profilehome'])
    }
  }
  fivetemp(){
    
    if(this.UserData){
      this._router.navigate(['/fivetemp',this.userid])
    }
    else if(this.session=='adminsession'){
      this._router.navigate(['/fivetemp1'])
    }
    else{
      this._router.navigate(['/profilehome'])
    }
  }
}
