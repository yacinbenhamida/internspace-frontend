import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import Student from 'src/app/models/Student';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  currentUserValue : User;
  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json'
    })
 };
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
  signUpStudent(stud:Student){
    return this.http.post("/api/student/add",JSON.stringify(stud),this.httpOptions);
  }
  logout() {
    localStorage.clear();
    this.currentUserValue = null;
  }
}
