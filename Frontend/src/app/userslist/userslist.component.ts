import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SignupModel } from '../signup/signup.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  users : SignupModel[]
  constructor(private _add:UserService,private router:Router) {
    this.users = [];
   }

  ngOnInit(): void {
    this._add.users()
    .subscribe(data=>
      {
        
        this.users = JSON.parse(JSON.stringify(data));
        console.log(this.users,"for users list")
      })
  }
  viewprofile(user:any){
    localStorage.setItem("user_Id",user._id.toString());
    this._add.getUser(user._id)
    .subscribe((data)=>{
      console.log(data)
      if(!data){
        alert("User dont have a user Profile")
        
      }
      else{
        this.router.navigate(['viewprofile']);
      }
    })
   
}
}
