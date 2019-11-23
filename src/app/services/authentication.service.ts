import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http:HttpClient) { }

  verifyUserCredentials(username:string, password:string ) {
    const payload = new HttpParams()
    .set('username', username)
    .set('password', password);
    return this.http.post("/api/internspace/authentication",payload)
  }
  getUser(username : string){
    return this.http.get<User>('/api/internspace/users/getUser'+ username)
  }
}
