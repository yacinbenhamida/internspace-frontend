import { FypFile } from 'src/app/models/fyp/fyp-file';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FypFileService {
    constructor(private http: HttpClient) { }

    getFypFilesOfDepartment(depId:number){
        return this.http.get<FypFile[]>("/api/fypsheet/"+depId)
    }
    getAcceptedFYPFiles(idDep:number){
    return this.http.get<FypFile[]>("/api/fypsheet/accepted/"+idDep)
    }
    getPendingFYPFiles(idDep:number){
        return this.http.get<FypFile[]>("/api/fypsheet/nosupervisors/"+idDep)
    }
}