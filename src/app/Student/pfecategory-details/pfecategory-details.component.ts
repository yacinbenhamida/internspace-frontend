import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from 'src/app/services/student/subjects.service';
import { FypCategory } from 'src/app/models/fyp/fyp-category';
import { FYPSubject } from 'src/app/models/fyp/fyp-subject';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-pfecategory-details',
  templateUrl: './pfecategory-details.component.html',
  styleUrls: ['./pfecategory-details.component.css']
})
export class PFECategoryDetailsComponent implements OnInit {
  fypCategory: FypCategory;
  fypCategorys: FypCategory[];
  AllfypSubject: FYPSubject[];
  fypSubject: FYPSubject;

  constructor(private _route :ActivatedRoute, private subjectsService: SubjectsService,private auth:AuthenticationService) { }

getFyp(id:number) :  any {
  this.subjectsService.Getcats().subscribe(fypts => {
    this.AllfypSubject = fypts as FYPSubject[];
   // fypts.push();
    this.fypCategorys.push();
  });
  return this.fypCategorys.find(e=>e.id == id)
}

  ngOnInit() {
    const id = +this._route.snapshot.params['id'];
   this.subjectsService.findCat(id).subscribe(fypts => {
    this.AllfypSubject = fypts as FYPSubject[];
    console.log(this.AllfypSubject);});
  
   console.log(this.fypSubject);
   
  }

}
