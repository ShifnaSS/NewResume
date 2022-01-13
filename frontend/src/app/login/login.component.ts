import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SignupModel } from '../signup/signup.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: FormGroup;
  submitted = false;
  signup = new SignupModel(null!,null!,null!,null!,null!)
  constructor(private fb:FormBuilder,private router:Router,public _auth:AuthService) { 
    this.loginData = this.fb.group({
      Username :['',Validators.required],
      pass :['',Validators.required],
      checkbox : [false, Validators.requiredTrue]
    });
  }
  

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginData.controls;
  }
  onLogin(){
    this.submitted = true;

    if (this.loginData.invalid) {
      return;
    }
    console.log('enterd')
    var loginUser = this.loginData.value;
    console.log(loginUser)
    this._auth.login(loginUser)
  .subscribe(res =>
    {
    localStorage.setItem('token', res.token)
    localStorage.setItem('session',res.session)
    localStorage.setItem('userid',res.id)
    this.router.navigate(['/'])
    },
    err=>{
      
      this.router.navigate(['/login'])
      
    }
    )
   }
}
