import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FypFileService {

    constructor(private http: HttpClient) { }

    getFypFilesOfDepartment(depId:number){
        return this.http.get("/api/internspace/fypsheet/"+depId)
    }



}
