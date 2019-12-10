import { Component, OnInit, Input } from '@angular/core';
import { TeacherServiceService } from '../services/Teacher/teacher-service.service';
import { Router } from '@angular/router';
import { FypCategory } from '../models/fyp/fyp-category';
import { UniStatsService } from '../services/dashboard/uni-stats.service';

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
  uniStatsService:UniStatsService;
  constructor(uniStatsService: UniStatsService,
     restApi: TeacherServiceService, 
     router: Router
  ) {this.restApi=restApi;
  this.router=router;
  this.uniStatsService=uniStatsService;}

  ngOnInit() {
    this.uniStatsService.GetCategories().subscribe(e => this.fypcategorys = e);
   console.log(this.fypcategorys+"ff");
   }

  addFypcat() {
   
    this.restApi.AddFypCategory(this.name,this.fypcategory,this.Descr).subscribe((data: {}) => {
      this.router.navigate([]);
    })
  }

}
