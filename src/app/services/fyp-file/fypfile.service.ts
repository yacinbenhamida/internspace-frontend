import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { FypFile } from 'src/app/models/fyp/fyp-file';

@Injectable({
  providedIn: 'root'
})
export class FypFileService {

    constructor(private http: HttpClient) { }

    getFypFilesOfDepartment(depId:number){
        return this.http.get<FypFile[]>("/api/internspace/fypsheet/"+depId)
    }
    private extractData(res: Response) {
      let body = res.json();
      return res.json || body || { };
   }


}
