import { FypTemplateElement } from '../../models/fyp/fyp-template-element';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FypTemplate } from '../../models/fyp/fyp-template';
import { FypFile } from 'src/app/models/fyp/fyp-file';

/*
  Le directeur des stages, une fois connecté:
  [ ] ● CRUD des templates de la fiche PFE & convention de stage.
  [ ] ● CRUD des elements de la template de PFE & la convention de stage.
  [ ] ● Exporter en PDF le template de la fiche PFE.
  [ ] ● Exporter en PDF le template de la convention de stage.
  [ ] ● Après avoir sélectionné un étudiant, exporter en PDF la fiche PFE de l’étudiant
    (conforme l’une des templates créé et avec les données associées à l’étudiant).
  [ ] ● Exporter en PDF une convention de stage d’un étudiant qui a déjà rempli sa fiche PFE
    (conforme au template crée et avec les données associées).
    ⇒ Dans cette partie, il faut avoir une sorte d’éditeur de text en ligne.
*/

@Injectable({
  providedIn: 'root'
})
export class FypTemplateService {

  // Base url
  baseurl = '/api/template';

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
  CreateFypTemplate(data: FypTemplate): Observable<FypTemplate> {
    return this.http.post<FypTemplate>(this.baseurl + '/create/' + data.templateName, JSON.stringify(data), this.httpOptions);
  }

  // GET
  GetFypTemplatesForEditor(editorId: number): Observable<FypTemplate[]> {
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
  }
}
