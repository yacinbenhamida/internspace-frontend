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
  @Input() fypcategory :FypCategory;

  constructor(
    public restApi: TeacherServiceService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addFypcat(datacategory) {
    this.restApi.AddFypCategory(this.fypcategory).subscribe((data: {}) => {
      this.router.navigate([])
    })
  }

}
