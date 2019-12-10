import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FYPDefense } from 'src/app/models/fyp/fyp-defense';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  // Base url
  baseurl = '/api/defense';



  // Http Headers

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getDefensesList(): Observable<FYPDefense[]> {
    return this.http.get<FYPDefense[]>(this.baseurl);
  }



  constructor(private http: HttpClient) { }
}
