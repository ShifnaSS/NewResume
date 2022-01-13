import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService,private router:Router,private _add:UserService) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('session')
    localStorage.removeItem('userid')
    this.router.navigate(['/'])
  }
  // checkuser(){
  //   var sessionvalue = localStorage.getItem('session');
  //   var userid = localStorage.getItem('userid');
  //   if(sessionvalue=='usersession')
  //   {
  //     this._add.checkprofile(userid)
  //     .subscribe((data)=>{
  //       console.log(data)
  //       if(data != null)
  //       {
  //         this.router.navigate(['/profile'])
  //       }
  //     });
  //   }
  // }
}
