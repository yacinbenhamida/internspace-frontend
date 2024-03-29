import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FypIntervention } from 'src/app/models/fyp/fyp-intervention';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class FypFileInterventionService {

    constructor(private http: HttpClient) { }

    getInterventionsOfTeacher(tId:number){
        return this.http.get<FypIntervention[]>("/api/interventions/getInterventionsOfTeacher/"+tId)
    }
    getInterventionsOfSheet(sheetId:number){
      return this.http.get<FypIntervention[]>("/api/interventions/getInterventions/"+sheetId)
  }
    assignTeacherToFYPSheetWithRole(idTeacher : number,file:FypFile,role:string){
      return this.http.get<FypIntervention[]>("/api/interventions/assign/"+idTeacher+"/"+file.id+"/"+role)
    }
    editTeacherRole(idIntervention : number,role:string, idTeacher :number){
      return this.http.get<FypIntervention[]>("/api/interventions/edit/"+idIntervention+"/"+role+"/"+idTeacher)
    }
    private extractData(res: Response) {
      let body = res.json();
      return res.json || body || { };
   }


}
