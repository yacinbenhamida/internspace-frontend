import { FypFile } from 'src/app/models/fyp/fyp-file';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { FypCategory } from 'src/app/models/fyp/fyp-category';
@Injectable({
  providedIn: 'root'
})
export class FYPCategoriesService {
    constructor(private http: HttpClient) { }

    getAllCategories(depId:number){
        return this.http.get<FypCategory[]>("/api/category/"+depId)
        .pipe(map(data =>{return data}));
    }
    getAllSuggestedCategories(idDep:number){
        return this.http.get<FypCategory[]>("/api/category/suggestions/"+idDep)
    }

}