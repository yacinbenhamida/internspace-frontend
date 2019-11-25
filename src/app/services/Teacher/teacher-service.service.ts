import { FypTemplateElement } from '../../models/fyp/fyp-template-element';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FypTemplate } from '../../models/fyp/fyp-template';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FypCategory } from 'src/app/models/fyp/fyp-category';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  
  // Base url
  baseurl = '/api/teachers';

  constructor(private http: HttpClient) { }

  // Http Headers

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // POST
  AddFypCategory(data: FypCategory): Observable<FypCategory> {
    return this.http.post<FypCategory>(this.baseurl + '/add/' + data.name, JSON.stringify(data), this.httpOptions);
  }

  // GET
  GetPrevalidatedFyp(TeacherId: number): Observable<FypFile[]> {
    const params = new HttpParams().set('editorId', TeacherId.toString());

    return this.http.get<FypFile[]>(this.baseurl + '/pre_valid/', { headers: this.headers, params: params });
  }

}
