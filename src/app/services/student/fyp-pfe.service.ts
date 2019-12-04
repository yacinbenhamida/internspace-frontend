import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FypFile } from 'src/app/models/fyp/fyp-file';
import { Observable } from 'rxjs';
import { FYPSubject } from 'src/app/models/fyp/fyp-subject';

@Injectable({
  providedIn: 'root'
})
export class FypPFEService {

  // Base url
baseurl = "/api/student";





// Http Headers

headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(private http: HttpClient) { }
  GetFypSubject():Observable<FYPSubject[]>{
    return this.http.get<FYPSubject[]>('/api/company/subjects/all');
    }
  GetFyp():Observable<FypFile[]>{
      return this.http.get<FypFile[]>('/api/fypsheet/');
      }
  createIntership(data:FypFile ,id:string):Observable<FypFile[]>{
  //const param = new HttpParams().set('isArchived',isArchived).set('isPrevalidated',isPrevalidated);

   // let url = `http://localhost:9080/internspace-web/internspace/intership/add?id=${id}`
  
      return this.http.post<FypFile[]>('/api/student/create?id='+id, JSON.stringify(data), this.httpOptions);
  
    }

    //view his FypFile

    ViewFypFile(cin:string):Observable<FypFile[]>{
      return this.http.get<FypFile[]>('/api/student/ci?cin='+cin);
      }

//edit
    editFile(data:FypFile ,id:string):Observable<FypFile[]>{
        //const param = new HttpParams().set('isArchived',isArchived).set('isPrevalidated',isPrevalidated);
      
         // let url = `http://localhost:9080/internspace-web/internspace/intership/add?id=${id}`
        
            return this.http.put<FypFile[]>('/api/fypsheet/edittstd?id='+id, JSON.stringify(data), this.httpOptions);
        
          }
}
