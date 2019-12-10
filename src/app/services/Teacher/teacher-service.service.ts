import { FypTemplateElement } from '../../models/fyp/fyp-template-element';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FypTemplate } from '../../models/fyp/fyp-template';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FypCategory } from 'src/app/models/fyp/fyp-category';
import { FypFileModification } from 'src/app/models/fyp/fyp-modification';
import { catchError } from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { UniversitaryYear } from 'src/app/models/university/universitary-year';

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
  AddFypCategory(name: string,data:FypCategory,desc:string,depId:number): Observable<FypCategory> {
    return this.http.post<FypCategory>(this.baseurl+'/add?name='+name+'&desc='+desc+'&depid='+depId, JSON.stringify(data), this.httpOptions);
  }

  // GET
  GetPrevalidatedFyp(TeacherId: number): Observable<FypFile[]> {
    //const params = new HttpParams().set('', TeacherId.toString());

    return this.http.get<FypFile[]>(this.baseurl + '/pre_valid/'+TeacherId, { headers: this.headers, });
  }
   // GET
   GetSupervisedFyp(TeacherId: number): Observable<FypFile[]> {
    //const params = new HttpParams().set('', TeacherId.toString());

    return this.http.get<FypFile[]>(this.baseurl + '/supervised/'+TeacherId, { headers: this.headers, });
  }
  //GET
  GetFYPFILEPending():Observable<FypFile[]>{
    return this.http.get<FypFile[]>(this.baseurl +'/pending', { headers: this.headers});

  }
    //GET
    GetFYPFIemodifications():Observable<FypFileModification[]>{
      return this.http.get<FypFileModification[]>(this.baseurl +'/allfypMod', { headers: this.headers});
  
    }
  //PUT
  PrevalidateFypFile(id:number){
    this.http.put(this.baseurl+'/prevalidate/'+id,{headers: this.headers});
    console.log("okay");
  }
  //PUT
  approveMajorModification(id:number,id2:number):Observable<FypFileModification>
  {
    return this.http.put<FypFileModification>(this.baseurl +'/edit/'+id+'/'+id2,{headers: this.headers});
    console.log("okay");

  }
  //GET
  Getprotractoredfypfiles(id:number):Observable<FypFile[]>
  {
    return this.http.get<FypFile[]>(this.baseurl+'/pr/'+id,{headers:this.headers});
  }
  getAllFypFiles(id:number):Observable<FypFile[]>
  {
    return this.http.get<FypFile[]>(this.baseurl+'/allfyps/'+id,{headers:this.headers});
  }
  getfypsize(x:String,id:number):Observable<number>{
    return this.http.get<number>(this.baseurl+'/size/'+x+'/'+id,{headers:this.headers});

  }
  getmodificationssize():Observable<number>{
    return this.http.get<number>(this.baseurl+'/Mmsize',{headers:this.headers});
  }
  getAllCategories():Observable<FypCategory[]>{
    return this.http.get<FypCategory[]>(this.baseurl+'/allCat',{headers:this.headers});

  }
  getAllUniYEars():Observable<UniversitaryYear[]>{
    return this.http.get<UniversitaryYear[]>(this.baseurl+'/FypYears',{headers:this.headers});
  }

}
