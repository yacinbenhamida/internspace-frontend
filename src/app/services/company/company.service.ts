import { Observable } from 'rxjs';
import { FYPSubject } from './../../models/fyp/fyp-subject';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // Base url
  baseurl = '/api/company';

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

  // GET
  GetFypSubjectsByCompanyId(companyId: number): Observable<FYPSubject[]> {

    const params = new HttpParams().set('company', companyId.toString());

    return this.http.get<FYPSubject[]>(this.baseurl + '/subjects/allbycompany/', { headers: this.headers, params: params });
  }

  GetStudentFypSubjectsOfSubjectByStatus(subjectId: number,
    status: string, fetchAll: boolean): Observable<any[]> {

    const params = new HttpParams()
      .set('subject', subjectId.toString())
      // .set('status', status.toString())
      .set('fetch-all', fetchAll.toString());

    return this.http.get<any[]>(this.baseurl + '/subjects/sfs/bysubject', { headers: this.headers, params: params });
  }

  SetStudentApplianceToSubject(studentId: number, subjectId: number, action: string): any {
    const params = new HttpParams()
      .set('student', studentId.toString())
      .set('subject', subjectId.toString());

    return this.http.get<any>(this.baseurl + '/subjects/' + action, { headers: this.headers, params: params });
  }


}
