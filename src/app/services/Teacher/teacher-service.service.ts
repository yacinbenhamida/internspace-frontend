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
 /* GetFypTemplatesForEditor(editorId: number): Observable<FypTemplate[]> {
    const params = new HttpParams().set('editorId', editorId.toString());

    return this.http.get<FypTemplate[]>(this.baseurl + '/editor/all', { headers: this.headers, params: params });
  }

  // GET
  UpdateTemplateElement(element: FypTemplateElement): Observable<Object> {

    const params = new HttpParams()
      .set('id', element.id.toString())
      .set('h', element.height.toString())
      .set('w', element.weight.toString())
      .set('x', element.x_coord.toString())
      .set('y', element.y_coord.toString());

    return this.http.get<Object>(this.baseurl + '/update/element', { headers: this.headers, params: params });
  }

  // GET
  GetSimilarFypFileByName(name: string): Observable<FypFile[]> {
    const params = new HttpParams()
      .set('name', name)
      .set('n', '10')
      .set('like', 'true');

    return this.http.get<FypFile[]>(this.baseurl + '/find-file/name', { headers: this.headers, params: params });
  }*/
}
