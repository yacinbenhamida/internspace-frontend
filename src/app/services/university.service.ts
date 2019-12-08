import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from '../models/university/university';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  // Base url
baseurl = '/api/university';



// Http Headers

headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  getUniversities():Observable<University[]>{
    return this.http.get<University[]>(this.baseurl);
    }

    searchUniversity(id):Observable<University>{
      return this.http.get<University>(this.baseurl+'/'+id);
      }
  createUniversity(data: University):Observable<University> {
    return this.http.post<University>(this.baseurl,JSON.stringify(data), this.httpOptions);
  }

  updateUniversity(data: University):Observable<University> {
    return this.http.put<University>(this.baseurl,JSON.stringify(data), this.httpOptions);
  }

  deleteUniversity(data: University):Observable<University> {
    return this.http.delete<University>(this.baseurl+'/'+data.id);
  }

  constructor(private http: HttpClient) { }
}
