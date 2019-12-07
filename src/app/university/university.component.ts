import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../services/university.service';
import { University } from '../models/university/University';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  universities: University[];
  selectedUniversity: University;
  
  constructor(private universityServices: UniversityService) { }

  getUniversities(): void {
    this.universityServices.getUniversities()
    .subscribe(universities => this.universities = universities);
   }

   trackByFunction(index, item) {
    if(!item) return null;
    return item.id;
   }
  searchUniversity(data: University) {
    let id = data.id;
    this.universityServices.searchUniversity(id).subscribe(u => this.selectedUniversity = u);
    console.log(this.selectedUniversity);
  }
  ngOnInit() {
    this.getUniversities();
    
  }

  getUniversityIndex(data: University): number {
   let isUniversity = (u) => u.id == data.id;
   return this.universities.findIndex(isUniversity);
  }
  deleteUniversity(data: University) {
    this.universityServices.deleteUniversity(data).subscribe();
    let x = this.getUniversityIndex(data);
    this.universities.splice(x, 1);
  }

}
