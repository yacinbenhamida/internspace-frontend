import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { FypFileHistory } from 'src/app/models/fyp/fyp-file-history';
@Injectable({
  providedIn: 'root'
})
export class FypFileHistoryService {

    constructor(private http: HttpClient) { }

    getHistoryOfFypFile(fypFileId:number) {
        return this.http.get("/api/internspace/FYPSheetHistory/gethistory/"+fypFileId)
        .pipe(
          map(res => res as FypFileHistory[] || [])
          );
    }
   


}
