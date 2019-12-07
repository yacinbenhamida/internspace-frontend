import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FypFile } from 'src/app/models/fyp/fyp-file';
import { Observable } from 'rxjs';
import { FYPSubject } from 'src/app/models/fyp/fyp-subject';
import { FypCategory } from 'src/app/models/fyp/fyp-category';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

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
  findCat(id:number):Observable<FYPSubject[]>{
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<FYPSubject[]>(`${this.baseurl}/cat`,{params:params})
  }
  Getcats():Observable<FYPSubject[]>{
    return this.http.get<FYPSubject[]>(this.baseurl+'/categorys');
    }
}
