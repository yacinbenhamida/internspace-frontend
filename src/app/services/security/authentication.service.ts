import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  currentUserValue : User;

  constructor(private http:HttpClient) { 
    if(localStorage.getItem('token') && localStorage.getItem('user')){
      this.currentUserValue = JSON.parse(localStorage.getItem('user'))
      console.log(this.currentUserValue)
    }
  }

  verifyUserCredentials(username:string, password:string ) {
    const payload = new HttpParams()
    .set('username', username)
    .set('password', password);
    return this.http.post("/api/authentication",payload)
  }
  getUser(username : string){
    return this.http.get<User>('/api/users/getUser'+ username)
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.currentUserValue = null;
  }
}
