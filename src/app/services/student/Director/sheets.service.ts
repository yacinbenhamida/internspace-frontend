import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { Student } from 'src/app/models/users/student';
@Injectable({
  providedIn: 'root'
})
export class SheetsService {


    // Base url
baseurl = "/api/fypsheet";


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


  //pending Sheets

  SheetsPending():Observable<FypFile[]>{
    return this.http.get<FypFile[]>('/api/fypsheet/pending');
  }

  AcceptPFE(id:number):Observable<FypFile[]>{

    return this.http.get<FypFile[]>('/api/internship/acceptPFEe?id='+id, this.httpOptions);
   
  }
  cancelPFE(id:number):Observable<FypFile[]>{

    return this.http.get<FypFile[]>('/api/internship/cancelPFEe?id='+id, this.httpOptions);
   
  }

  MailRefus(cin:string,text:string){
    return this.http.get<any>('/api/student/mail?text='+text+'&cin='+cin, this.httpOptions);
  }
}
