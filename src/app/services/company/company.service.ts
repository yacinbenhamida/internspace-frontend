import { catchError } from 'rxjs/operators';
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

  CreateNewSubject(fypSubject: FYPSubject) {
    return this.http.post<any>(this.baseurl + '/subjects/addobj', fypSubject, this.httpOptions);
  }

  GetAllSubjects() {
    return this.http.get<any>(this.baseurl + '/subjects/all', this.httpOptions);
  }

  // Student & Subjects
  ApplyToSubject(studentId: number, subjectId: number): any {
    const params = new HttpParams()
      .set('student', studentId.toString())
      .set('subject', subjectId.toString());

    return this.http.get<any>(this.baseurl + '/subjects/apply', { headers: this.headers, params: params });
  }

  UnapplyToSubject(studentId: number, subjectId: number): any {
    const params = new HttpParams()
      .set('student', studentId.toString())
      .set('subject', subjectId.toString());

    return this.http.get<any>(this.baseurl + '/subjects/unapply', { headers: this.headers, params: params });
  }

  GetSuggestedSubjectsByStudent(studentId: number, filterUntaken: boolean): any {
    const params = new HttpParams()
      .set('student', studentId.toString())
      .set('filter-untaken', filterUntaken ? 'true' : 'false');

    return this.http.get<any>(this.baseurl + '/subjects/suggestion/student', { headers: this.headers, params: params });
  }
}
