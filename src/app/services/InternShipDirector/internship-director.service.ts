import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import Student from 'src/app/models/Student';
import { User } from 'src/app/models/User';
import { Department } from 'src/app/models/department';
@Injectable({
  providedIn: 'root'
})
export class InternshipDirectorService {

   // Base url
   baseurl = '/api/internship';
  constructor(private http : HttpClient) { }

  getCurrentFYPFileList():Observable<FypFile[]>{
    return this.http.get<FypFile[]>(`${this.baseurl}/currentFYPFile`);
  }

  getFileWithAnnulationDemande():Observable<FypFile[]>{
    return this.http.get<FypFile[]>(`${this.baseurl}/FYPFileAnnulationDemandeList`)
  }

  getAllStudents(id:number):Observable<User[]>{
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<User[]>(`${this.baseurl}/allStudents`,{params:params})
  }

  findStudentByCIN(cin:string,id:string):Observable<Student>{
    const params = new HttpParams().set('cin', cin).set('id', id);
    return this.http.get<Student>(`${this.baseurl}/FindStudent`,{params:params})
  }

  FYPFileWaitingForDefensePlanByCIN(cin:string):Observable<FypFile>{
    const params = new HttpParams().set('cin', cin);
    return this.http.get<FypFile>(`${this.baseurl}/FilterWaitingForDefensePlanningList`,{params:params})
  }

  ArchivedFiles():Observable<FypFile[]>{
    return this.http.get<FypFile[]>(`/api/internspace/ArchiveFile/listFile`)
  }


  FullStudentInfo(id:string):Observable<Student[]>{
    const params = new HttpParams().set('id', id);
    return this.http.get<Student[]>(`${this.baseurl}/FullInfoOfStudent`,{params:params});
  }

  FypFileByCountry(country: string):Observable<FypFile[]>{
  const params = new HttpParams().set('location', country);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileCountry`,{params:params})
}

ListLateStudents(year:string,id:string):Observable<User[]>{
  if(year){
  const param = new HttpParams().set('year', year).set('id', id);
  return this.http.get<User[]>(`${this.baseurl}/listLate`,{params:param})
}
else{
const param = new HttpParams().set('id', id);
return this.http.get<User[]>(`${this.baseurl}/listLate`,{params:param})
}
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

FypFileByDiffSpecfique(state:string,year:string,location:string):Observable<FypFile[]>{
  if(state && year && location){
  const param = new HttpParams().set('state',state).set('year',year).set('location',location);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileBySpec`,{params:param})
}

else if(state.length === 0){
  const param = new HttpParams().set('year',year).set('location',location);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileBySpec`,{params:param})
}
else if(year.length === 0){
const param = new HttpParams().set('state',state).set('location',location);
  return this.http.get<FypFile[]>(`${this.baseurl}/allFYPFileBySpec`,{params:param})
}
else {
  const param = new HttpParams().set('state',state).set('year',year);
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
//listDepartement?id=1
DepartementList(id:string):Observable<Department[]>{
  const param = new HttpParams().set('id',id)
  return this.http.get<Department[]>(`${this.baseurl}/listDepartement`,{params:param})

}
FixNumberAsSupervisor(nombre:string,id:string):Observable<any>{
  const param = new HttpParams().set('nb',nombre).set('id',id);
  let url = `http://localhost:9080/internspace-web/internspace/internship/FixActionNumberAsSupervisor?nb=${nombre}&id=${id}`
  return this.http.put<any>(url,{params:param})
}
FixNumberAsProtractor(nombre:string,id:string):Observable<any>{
  const param = new HttpParams().set('nb',nombre).set('id',id);
  let url = `http://localhost:9080/internspace-web/internspace/internship/FixActionNumberAsProtractor?nb=${nombre}&id=${id}`
  return this.http.put<any>(url,{params:param})
}
FixNumberAsPreValidator(nombre:string,id:string):Observable<any>{
  const param = new HttpParams().set('nb',nombre).set('id',id);
  let url = `http://localhost:9080/internspace-web/internspace/internship/FixActionNumberAsPreValidator?nb=${nombre}&id=${id}`
  return this.http.put<any>(url,{params:param})
}

FixNumberAsJuryPresident(nombre:string,id:string):Observable<any>{
  const param = new HttpParams().set('nb',nombre).set('id',id);
  let url = `http://localhost:9080/internspace-web/internspace/internship/FixActionNumberAsJuryPresident?nb=${nombre}&id=${id}`
  return this.http.put<any>(url,{params:param})
}

PendingFYPFile():Observable<FypFile[]>{
return this.http.get<FypFile[]>(`${this.baseurl}/FYPFileToGetLinks`)
}

LinksOfChoosenCompany(id:string):Observable<string[]>{
  const param = new HttpParams().set('id',id);
  return this.http.get<string[]>(`${this.baseurl}/getLinkOfCompany`,{params:param})
}
CompanyCordinates(id:string):Observable<string[]>{
  const param = new HttpParams().set('id',id);
  return this.http.get<string[]>(`${this.baseurl}/getCompanyCord?`,{params:param})
}


sendMail(year:string,text:string,id:string):Observable<any>{
  const param = new HttpParams().set('year',year).set('text',text).set('id',id);
  return this.http.get<any>(`http://localhost:9080/internspace-web/internspace/internship/listmailing?`,{params:param})
}

departmentInfo(id:string):Observable<Department>{
  const param = new HttpParams().set('id',id);
  return this.http.get<Department>(`http://localhost:9080/internspace-web/internspace/internship/departementInfo?`,{params:param})
}

}
