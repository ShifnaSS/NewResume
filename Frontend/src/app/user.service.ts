import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  server_address : string = 'api';
  constructor(private http:HttpClient) { }
  adduser(user:any,id:any,data_img:any){
    return this.http.post<any>(`${this.server_address}/adduser`,{"user":user,"id":id,data_img})
    .subscribe((data)=>{
      console.log(data,"afterURLsubmitof adduser")})
  }
  addimage(img:any){
    return this.http.post<any>(`${this.server_address}/addimage`,img)
    
  }
  getUser(id:any){
    return this.http.get<any>(`${this.server_address}/getuser/`+id);
  }
  gettempUser(id:any){
    return this.http.get<any>(`${this.server_address}/gettempuser/`+id);
  }
  signup(user:any){
    return this.http.post<any>(`${this.server_address}/signup`,{"user":user})
    .subscribe((data)=>{
      console.log(data)})
  }
  checkprofile(userid:any){
    return this.http.get<any>(`${this.server_address}/checkpro/`+userid)
    
  }
  users(){
    return this.http.get<any>(`${this.server_address}/userslist`)
  }
  update_user(data:any,oid:any,img:any){
    return this.http.put<any>(`${this.server_address}/update`,{data,oid,img})
    .subscribe((data)=>{
      console.log(data)
    })
  }
  deleteprofile(id:any){
    return this.http.delete<any>(`${this.server_address}/deleteprofile/`+id)
  }
  download(id:any,templateid:any){
    return this.http.post<any>(`${this.server_address}/download`,{id,templateid})
    .subscribe((data)=>{
      console.log(data)})
  }
  weblink(webuserid:any,weblinkid:any){
    return this.http.post<any>(`${this.server_address}/weblink`,{webuserid,weblinkid})
    .subscribe((data)=>{
      console.log(data)})
  }
  getsignup(id:any){
    return this.http.get<any>(`${this.server_address}/getsignup/`+id)
  }
  getnot(){
    return this.http.get<any>(`${this.server_address}/getnot`)
  }
}
