import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupuser: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private _add: UserService,
    private router: Router
  ) {
    this.signupuser = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
          ],
        ],
        email_id: [
          '',
          [
            Validators.required,
            Validators.compose([
              Validators.pattern('^[a-zA-Z0-9.%+]+@[a-z0-9.-]+.[a-z]{2,4}')
            ])
          ]
        ],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10)
          ]
        ],
        pass1: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
            Validators.maxLength(50),
             Validators.pattern(/[A-Z]/),
             Validators.pattern(/[a-z]/),
             Validators.pattern(/[0-9]/),
             Validators.pattern(/[!@#$]/)
          ],
        ],
        pass2: ['', Validators.required],
      },
      {
        validator: this.checkPasswords,
      }
    );
  }
  checkPasswords(group: FormGroup) {
    const pass = group.controls['pass1'].value;
    const confirmPass = group.controls['pass2'].value;

    return pass === confirmPass ? null : { notSame: true };
  }
  ngOnInit(): void {}
  get f(): { [key: string]: AbstractControl } {
    return this.signupuser.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.signupuser.invalid) {
      return;
    }
      console.log(this.signupuser.value);
    var user = this.signupuser.value;
    this._add.signup(user);
    alert('New user added');
    // localStorage.setItem("userID", user._id.toString())
    this.router.navigate(['login']);
    
  }
}
