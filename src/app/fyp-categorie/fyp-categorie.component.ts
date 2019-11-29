import { Component, OnInit, Input } from '@angular/core';
import { TeacherServiceService } from '../services/Teacher/teacher-service.service';
import { Router } from '@angular/router';
import { FypCategory } from '../models/fyp/fyp-category';

@Component({
  selector: 'app-fyp-categorie',
  templateUrl: './fyp-categorie.component.html',
  styleUrls: ['./fyp-categorie.component.css']
})
export class FypCategorieComponent implements OnInit {
  @Input() fypcategory: FypCategory;
  name:string;
  restApi: TeacherServiceService;
  router: Router;
  constructor(
     restApi: TeacherServiceService, 
     router: Router
  ) {this.restApi=restApi;
  this.router=router;}

  ngOnInit() { }

  addFypcat() {
   
    this.restApi.AddFypCategory(this.name,this.fypcategory).subscribe((data: {}) => {
      this.router.navigate([])
    })
  }

}
