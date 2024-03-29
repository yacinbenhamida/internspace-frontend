import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FypConvention } from 'src/app/models/fyp/fyp-convention';
import {Company } from 'src/app/models/users/Company';
import Student from 'src/app/models/Student';


@Injectable({
  providedIn: 'root'
})
export class FypConventionService {

// Base url
baseurl = "/api/intership";



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

  findStudentConvention(id:number):Observable<Student[]>{
     
      return this.http.get<Student[]>('/api/intership/list?id='+id,this.httpOptions)
    }
  createIntership(data:FypConvention ,id:string):Observable<FypConvention[]>{
    //const param = new HttpParams().set('id',id);
   // let url = `http://localhost:9080/internspace-web/internspace/intership/add?id=${id}`
  
      return this.http.post<FypConvention[]>('/api/intership/add?id='+id, JSON.stringify(data), this.httpOptions);
  
    }
    deleteConvention(id:string):Observable<Student[]>{
      const params = new HttpParams().set('id', id);
      return this.http.delete<Student[]>(`${this.baseurl}/delete/`,{params:params})
    }
    constructor(private http: HttpClient) { }


    cancel(id:number):Observable<FypConvention[]>{
      return this.http.get<FypConvention[]>('/api/student/cancelInter?id='+id, this.httpOptions);
    }

    getCompany():Observable<Company[]>{
     
      return this.http.get<Company[]>('/api/company/all',this.httpOptions)
    }


}
