import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FypConvention } from 'src/app/models/fyp/fyp-convention';
import Student from 'src/app/models/Student';

@Injectable({
  providedIn: 'root'
})
export class FypConventionService {

// Base url
baseurl = "/api/internspace/intership";



// Http Headers

headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
   // GET
  /* GetFypConvention(): Observable<FypConvention[]> {
    const params = new HttpParams();

    return this.http.get<FypConvention[]>(this.baseurl );
  }*/

  GetFypConvention():Observable<FypConvention[]>{
    return this.http.get<FypConvention[]>(this.baseurl);
    }

  findStudentConvention(id:string):Observable<Student>{
      const params = new HttpParams().set('id', id);
      return this.http.get<Student>(`${this.baseurl}/list`,{params:params})
    }

  constructor(private http: HttpClient) { }

}
