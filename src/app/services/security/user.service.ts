import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UserService {
 
  constructor(private http:HttpClient) {  }
  getDepartmentTeachers(sheetId:number){
    return this.http.get<User[]>("/api/users/teachers/ofdepartment/"+sheetId)
}
  
}
