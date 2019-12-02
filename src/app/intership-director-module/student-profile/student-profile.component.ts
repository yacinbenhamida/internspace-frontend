import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import Student from 'src/app/models/Student';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  id;

  student :Student;
  constructor(private _Activatedroute:ActivatedRoute, private _InternshipDirectorService:InternshipDirectorService,private auth:AuthenticationService) { }

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.paramMap.get("cin");
    this._InternshipDirectorService.findStudentByCIN(this.id,this.auth.currentUserValue.department.site.university.id.toString())
    .subscribe(data=>{console.log(data),this.student=data});
  }

}
