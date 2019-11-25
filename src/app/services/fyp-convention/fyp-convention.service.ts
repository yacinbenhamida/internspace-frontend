import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FypConvention } from 'src/app/models/fyp/fyp-convention';

@Injectable({
  providedIn: 'root'
})
export class FypConventionService {

// Base url
baseurl = 'http://localhost:9080/internspace-web/internspace/intership';



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

  constructor(private http: HttpClient) { }

}
