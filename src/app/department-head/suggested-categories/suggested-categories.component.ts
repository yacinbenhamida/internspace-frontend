import { Component, OnInit } from '@angular/core';
import { FYPCategoriesService } from 'src/app/services/categories/fyp-categories.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-suggested-categories',
  templateUrl: './suggested-categories.component.html',
  styleUrls: ['./suggested-categories.component.css']
})
export class SuggestedCategoriesComponent implements OnInit {
  allCategories : any[] 
  suggestedCategories : any[]
  constructor(private catServ:FYPCategoriesService,
    private auth:AuthenticationService) { }

  ngOnInit() {
    this.catServ.getAllCategories(this.auth.currentUserValue.department.id)
    .subscribe(result=>{
      this.allCategories = result
    })
    this.catServ.getAllSuggestedCategories(this.auth.currentUserValue.department.id)
    .subscribe(result=>{
      this.suggestedCategories = result
      console.log(this.suggestedCategories)
    })
  }

}
