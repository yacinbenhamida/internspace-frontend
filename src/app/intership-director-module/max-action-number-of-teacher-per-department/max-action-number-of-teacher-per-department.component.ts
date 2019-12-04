import { Component, OnInit } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { Department } from 'src/app/models/department';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-max-action-number-of-teacher-per-department',
  templateUrl: './max-action-number-of-teacher-per-department.component.html',
  styleUrls: ['./max-action-number-of-teacher-per-department.component.css']
})
export class MaxActionNumberOfTeacherPerDepartmentComponent implements OnInit {

  ListDep:Department[];
  constructor( private _interShipDService :InternshipDirectorService, private auth :AuthenticationService) { }

  ngOnInit() {
this._interShipDService.DepartementList(this.auth.currentUserValue.department.site.university.id.toString()).subscribe(data=>{this.ListDep=data,console.log(data)});

  }

}
