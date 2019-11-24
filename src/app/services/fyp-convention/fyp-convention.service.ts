import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FypConvention } from 'src/app/models/fyp/fyp-convention';

@Injectable({
  providedIn: 'root'
})
export class FypConventionService {

// Base url
baseurl = '/api/template';



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
   GetFypTemplatesForEditor(editorId: number): Observable<FypConvention[]> {
    const params = new HttpParams().set('editorId', editorId.toString());

    return this.http.get<FypConvention[]>(this.baseurl + '/editor/all', { headers: this.headers, params: params });
  }


  constructor(private http: HttpClient) { }

}
