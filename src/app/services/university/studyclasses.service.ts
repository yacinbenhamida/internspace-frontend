import { FypFile } from 'src/app/models/fyp/fyp-file';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Department } from 'src/app/models/department';
import { UniversitaryYear } from 'src/app/models/university/universitary-year';
import { StudyClass } from 'src/app/models/studyClass';
import { ClassOption } from 'src/app/models/university/class-option';
@Injectable({
  providedIn: 'root'
})
export class StudyClassesService {
  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json'
    })
 };
    constructor(private http: HttpClient) { }
    getAllStudyClassesOfDept(depId:number){
      return this.http.get<StudyClass[]>("/api/classes/"+depId+"/"+new Date().getFullYear())
      .pipe(map(data =>{return data}));
  }
    // fetching options of a department
    getAllClassOptionsOfDept(depId:number){
        return this.http.get<ClassOption[]>("/api/classes/options/"+depId)
        .pipe(map(data =>{return data}));
    }
    getRegisteredUniYears(){
      return this.http.get<UniversitaryYear[]>("/api/classes/uniyears/")
      .pipe(map(data =>{return data}));
  }
    add(studyClass:StudyClass){
      return this.http.put("/api/classes/add/"+new Date().getFullYear(),studyClass,this.httpOptions)
      .pipe(map(data =>{return data}));
    }
}