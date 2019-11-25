import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import Student from 'src/app/models/Student';
@Injectable({
  providedIn: 'root'
})
export class InternshipDirectorService {

   // Base url
   baseurl = '/api/internspace/internship';
  constructor(private http : HttpClient) { }

  getCurrentFYPFileList():Observable<FypFile[]>{
    return this.http.get<FypFile[]>(`${this.baseurl}/currentFYPFile`);
  }

  getFileWithAnnulationDemande():Observable<FypFile[]>{
    return this.http.get<FypFile[]>(`${this.baseurl}/FYPFileAnnulationDemandeList`)
  }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseurl}/allStudents`)
  }

  findStudentByCIN(cin:string):Observable<Student>{
    const params = new HttpParams().set('cin', cin);
    return this.http.get<Student>(`${this.baseurl}/FindStudent`,{params:params})
  }

  FYPFileWaitingForDefensePlanByCIN(cin:string):Observable<FypFile>{
    const params = new HttpParams().set('cin', cin);
    return this.http.get<FypFile>(`${this.baseurl}/FilterWaitingForDefensePlanningList`,{params:params})
  }

  ArchivedFiles():Observable<FypFile[]>{
    return this.http.get<FypFile[]>(`/api/internspace/ArchiveFile/listFile`)
  }


  FullStudentInfo():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseurl}/FullInfoOfStudent`);
  }

  FypFileByCountry(country: string):Observable<FypFile[]>{
  const params = new HttpParams().set('location', country);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileCountry`,{params:params})
}

ListLateStudents(year:string):Observable<Student[]>{
  if(year){
  const param = new HttpParams().set('year', year);
  return this.http.get<Student[]>(`${this.baseurl}/listLate`,{params:param})
}
else
return this.http.get<Student[]>(`${this.baseurl}/listLate`)
}


getAllFypFile():Observable<FypFile[]>{
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFile`);
}

FypFileByState(state: string):Observable<FypFile[]>{
  const param = new HttpParams().set('state', state);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileState`,{params:param})
}

FypFileByYear(year: string):Observable<FypFile[]>{
  const param = new HttpParams().set('year', year);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileByYear`,{params:param})
}

FypFileByCategory(category: string):Observable<FypFile[]>{
  const param = new HttpParams().set('category', category);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileByCategory`,{params:param})
}

FypFileByDiffSpecfique(category: string, state:string,year:string,location:string):Observable<FypFile[]>{
  if(category && state && year && location){
  const param = new HttpParams().set('category', category).set('state',state).set('year',year);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileBySpec`,{params:param})
}
else if(category.length === 0){
  const param = new HttpParams().set('state',state).set('year',year).set('location',location);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileBySpec`,{params:param})
}
else if(state.length === 0){
  const param = new HttpParams().set('category',category).set('year',year).set('location',location);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileBySpec`,{params:param})
}
else if(year.length === 0){
const param = new HttpParams().set('category',category).set('state',state).set('location',location);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileBySpec`,{params:param})
}
else {
  const param = new HttpParams().set('category',category).set('state',state).set('year',year);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileBySpec`,{params:param})
}
}

DeclineFYPFileCancellingDemande(id:string,text:string):Observable<any>{
  const param = new HttpParams().set('id',id).set('text',text);
  let url = `http://localhost:9080/internspace-web/internspace/internship/declineFYPFileAnnulation?id=${id}&text=${text}`;
  return this.http.put<any>(url,{params:param})
}

AcceptFYPFileCancellingDemande(id:string):Observable<any>{
  const param = new HttpParams().set('id',id);
  let url = `http://localhost:9080/internspace-web/internspace/internship/acceptFYPFileAnnulation?id=${id}`;
  return this.http.put<any>(url,{params:param})

}

AnnulationFYPFileDemandeList():Observable<FypFile[]>{
  return this.http.get<FypFile[]>(`${this.baseurl}/FYPFileAnnulationDemandeList`)
}

AcceptFYPFile(id:string):Observable<any>{
  const param = new HttpParams().set('id',id);
  let url = `http://localhost:9080/internspace-web/internspace/internship/acceptFYPFile?id=${id}`
  return this.http.put<any>(url,{params:param})

}

RefuseFYPFile(id:string, text:string):Observable<any>{
  const param = new HttpParams().set('id',id).set('text',text);
  let url = `http://localhost:9080/internspace-web/internspace/internship/refuseFYPFile?id=${id}&text=${text}`
  return this.http.post<any>(url,{params:param})

}

DisableStudentAccount(id:string):Observable<any>{
  const param = new HttpParams().set('id',id);
  let url = `http://localhost:9080/internspace-web/internspace/internship/disableAccount?id=${id}`
  return this.http.put<any>(url,{params:param})


}

ValidateReportSubmit(id:string):Observable<any>{
  const param = new HttpParams().set('id',id);
  let url = `http://localhost:9080/internspace-web/internspace/internship/ValidateSubmittedAReport?id=${id}`
  return this.http.put<any>(url,{params:param})
}

FYPFileWaitingForDefensePlan():Observable<FypFile[]>{
  return this.http.get<FypFile[]>(`${this.baseurl}/WaitingForDefensePlanningList`)
}

FilterFYPFileWaitingForDefensePlan(nom:string,cin:string):Observable<FypFile[]>{
  if(nom){
  let param = new HttpParams().set('nom',nom);
  return this.http.get<FypFile[]>(`${this.baseurl}/FilterWaitingForDefensePlanningList`,{params:param})}
  else{
  let param = new HttpParams().set('cin',cin);
  return this.http.get<FypFile[]>(`${this.baseurl}/FilterWaitingForDefensePlanningList`,{params:param})}
}

FixNumberAsSupervisor(nombre:string,id:string):Observable<any>{
  const param = new HttpParams().set('nb',nombre).set('id',id);
  let url = `http://localhost:9080/internspace-web/internspace/internship/FixActionNumberAsSupervisor?nb=${nombre}&id=${id}`
  return this.http.put<any>(url,{params:param})
}

PendingFYPFile():Observable<FypFile[]>{
return this.http.get<FypFile[]>(`${this.baseurl}/FYPFileToGetLinks`)
}

LinksOfChoosenCompany(id:string):Observable<string[]>{
  const param = new HttpParams().set('id',id);
  return this.http.get<string[]>(`${this.baseurl}/getLinkOfCompany`,{params:param})
}

}
