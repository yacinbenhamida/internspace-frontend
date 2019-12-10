import { Component, OnInit, Input } from '@angular/core';
import { TeacherServiceService } from '../services/Teacher/teacher-service.service';
import { Router } from '@angular/router';
import { FypCategory } from '../models/fyp/fyp-category';
import { UniStatsService } from '../services/dashboard/uni-stats.service';
import { AuthenticationService } from '../services/security/authentication.service';
import { FYPCategoriesService } from '../services/categories/fyp-categories.service';

@Component({
  selector: 'app-fyp-categorie',
  templateUrl: './fyp-categorie.component.html',
  styleUrls: ['./fyp-categorie.component.css']
})
export class FypCategorieComponent implements OnInit {
  @Input() fypcategory: FypCategory;
  fypcategorys:FypCategory[];
  name:string;
  Descr:string;
  restApi: TeacherServiceService;
  router: Router;
  uniStatsService:FYPCategoriesService;
  constructor(uniStatsService: FYPCategoriesService,
     restApi: TeacherServiceService, private auth:AuthenticationService, 
     router: Router
  ) {this.restApi=restApi;
  this.router=router;
  this.uniStatsService=uniStatsService;}

  ngOnInit() {
    this.uniStatsService.getAllCategories(this.auth.currentUserValue.department.id).subscribe(e => {this.fypcategorys = e;console.log(e);});
   console.log(this.fypcategorys+"ff");
   }

  addFypcat() {
   console.log(this.auth.currentUserValue.department.id);
    this.restApi.AddFypCategory(this.name,this.fypcategory,this.Descr,this.auth.currentUserValue.department.id).subscribe((data: {}) => {
      this.router.navigate([]);
    })
  }

}
