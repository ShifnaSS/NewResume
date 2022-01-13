import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  server_address : string = 'api';
  
  constructor(private http:HttpClient) { }

  login(loginUser:any){
    return this.http.post<any>(`${this.server_address}/login`,{"user":loginUser});
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  adminloggedIn(){
    var sessionvalue = localStorage.getItem('session');
    if(sessionvalue==='adminsession')
    {
      return true
    }
    else{
      return false
    }
  }
  userloggedIn(){
    var sessionvalue = localStorage.getItem('session');
    if(sessionvalue==='usersession')
    {
      return true
    }
    else{
      return false
    }
  }
  getSession(){
    return localStorage.getItem('session')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
