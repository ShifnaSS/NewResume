import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  server_address : string = 'api';

  constructor(private http:HttpClient) { }

  share(id:any){
    return this.http.get<any>(`${this.server_address}/share`+id)
  }
}
