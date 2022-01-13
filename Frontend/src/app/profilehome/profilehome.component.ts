import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profilehome',
  templateUrl: './profilehome.component.html',
  styleUrls: ['./profilehome.component.css']
})
export class ProfilehomeComponent implements OnInit {

  constructor(private router:Router,private _add:UserService) { }

  ngOnInit(): void {
    var sessionvalue = localStorage.getItem('session');
    var userid = localStorage.getItem('userid');
    if(sessionvalue=='usersession')
    {
      this._add.checkprofile(userid)
      .subscribe((data)=>{
        console.log(data)
        if(data != null)
        {
          this.router.navigate(['/profile'])
        }
      });
    }
  
  }
  checkUser(){
    console.log('checking')
    var sessionvalue = localStorage.getItem('session');
    if(sessionvalue=='usersession')
    {
      this.router.navigate(['/sampleform'])
      return true;
    }
    else{
      alert("you need to login first")
      this.router.navigate(['/login']);
      return false;
    }
  }
}
