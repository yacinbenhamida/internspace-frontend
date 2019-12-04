import { FypFile } from 'src/app/models/fyp/fyp-file';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { FypCategory } from 'src/app/models/fyp/fyp-category';
@Injectable({
  providedIn: 'root'
})
export class FYPCategoriesService {
    httpOptions = {
        headers: new HttpHeaders({
         'Content-Type': 'application/json'
        })
     };
    constructor(private http: HttpClient) { }

    getAllCategories(depId:number){
        return this.http.get<FypCategory[]>("/api/category/"+depId)
        .pipe(map(data =>{return data}));
    }
    getAllSuggestedCategories(idDep:number){
        return this.http.get<FypCategory[]>("/api/category/suggestions/"+idDep)
    }
    approveCategory(catId:number){
        return this.http.get<FypCategory>("/api/category/approve/"+catId)
        .pipe(map(data =>{return data}));
    }
    refuseCategory(catId:number){
        return this.http.get("/api/category/refuse/"+catId).pipe(map(res =>{return "a"}));
    }
    editCategory(category:FypCategory){
        return this.http.post("/api/category/edit/",category,this.httpOptions)
        .pipe(map(data =>{return data}));
    }
}