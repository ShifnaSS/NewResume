import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserModel } from './user.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private _add: UserService, private router: Router) {}
  UserData: any;
  ngOnInit(): void {
    let id = localStorage.getItem('userid');

    this._add.getUser(id).subscribe((data) => {
      this.UserData = JSON.parse(JSON.stringify(data));

      console.log(this.UserData.languages[0].languages);
    });
  }
  delete(id: any) {
    if (confirm('Are you sure ,you want to delete your profile?')) {
      this._add.deleteprofile(id).subscribe((data) => {
        this.router.navigate(['/profilehome']);
      });
    }
  }
}
