import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FypFile } from 'src/app/models/fyp/fyp-file';
import { Observable } from 'rxjs';
import { FYPSubject } from 'src/app/models/fyp/fyp-subject';
import { Employee } from 'src/app/models/users/Employee';
import { FYPFeature } from 'src/app/models/fyp/fyp-features';

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


          
    Reclamation(text:string,id:String):Observable<FypFile[]>{
      return this.http.get<FypFile[]>('/api/student/mailRec?text='+text+'&id='+id, this.httpOptions);
      }

// voir Directeur de stage

DirecteurFyp( id: String):Observable<Employee[]>{

 return this.http.get<Employee[]>('/api/student/directeur?id='+id, this.httpOptions);
 
}

// Features List

Features():Observable<FYPFeature[]>{
  return this.http.get<FYPFeature[]>('/api/features');
}

ModifMajor(id: String):Observable<FypFile[]>{

  return this.http.get<FypFile[]>('/api/fypsheet/acceptPFE?id='+id, this.httpOptions);
 
}

}
