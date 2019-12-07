import { FypFile } from 'src/app/models/fyp/fyp-file';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Department } from 'src/app/models/department';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json'
    })
 };
    constructor(private http: HttpClient) { }
    // fetching depts of a university site
    getAllDepartmentsOfSite(siteId:number){
        return this.http.get<Department[]>("/api/department/"+siteId)
        .pipe(map(data =>{return data}));
    }
    addDepartment(department: Department){
      return this.http.post("/api/department/add/",department,this.httpOptions)
      .pipe(map(data =>{return data}));
    }
}