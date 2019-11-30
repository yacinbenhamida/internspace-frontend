import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FypIntervention } from 'src/app/models/fyp/fyp-intervention';

@Injectable({
  providedIn: 'root'
})
export class FypFileInterventionService {

    constructor(private http: HttpClient) { }

    getInterventionsOfSheet(sheetId:number){
        return this.http.get<FypIntervention[]>("/api/interventions/getInterventions/"+sheetId)
    }
    
    private extractData(res: Response) {
      let body = res.json();
      return res.json || body || { };
   }


}
