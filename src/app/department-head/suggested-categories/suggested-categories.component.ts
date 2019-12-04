import { Component, OnInit } from '@angular/core';
import { FYPCategoriesService } from 'src/app/services/categories/fyp-categories.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { FypCategory } from 'src/app/models/fyp/fyp-category';

@Component({
  selector: 'app-suggested-categories',
  templateUrl: './suggested-categories.component.html',
  styleUrls: ['./suggested-categories.component.css']
})
export class SuggestedCategoriesComponent implements OnInit {
  allCategories : any[] 
  suggestedCategories : any[]
  toBeEdited : FypCategory
  constructor(private catServ:FYPCategoriesService,
    private auth:AuthenticationService) { }

  ngOnInit() {
    this.catServ.getAllCategories(this.auth.currentUserValue.department.id)
    .subscribe(result=>{
      this.allCategories = result.filter(a=>a.approved == true)
    })
    this.catServ.getAllSuggestedCategories(this.auth.currentUserValue.department.id)
    .subscribe(result=>{
      this.suggestedCategories = result
    })
  }
  refuseSuggestion(a:FypCategory,choice:number){
    if(confirm("are you sure ?")){
      this.catServ.refuseCategory(a.id).subscribe(
        (err)=>{
        }
        ,()=>{
            if(choice ==1) this.suggestedCategories = this.suggestedCategories.filter(x=>x!=a);
            else this.allCategories = this.allCategories.filter(x=>x!=a);
          alert("suggestion removed");
        }
      )
    }
  }
  acceptSuggestion(a:FypCategory){
    if(confirm("are you sure ?")){
    this.catServ.approveCategory(a.id).subscribe(
      res=>{
        this.allCategories.push(res)
        alert("suggestion accepted");
      }
    )
  }
  }

  editRecord(a:FypCategory){
    this.toBeEdited = a;
  }
  editCategory(){
    this.catServ.editCategory(this.toBeEdited).subscribe(result=>{
    })
  }

}
