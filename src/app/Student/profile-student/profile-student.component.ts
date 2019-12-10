import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { FypPFEService } from 'src/app/services/student/fyp-pfe.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {


  Std: User;
  Stds: User[];
  constructor(private fypPfeService: FypPFEService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.currentUserValue;
    this.Std = this.Stu();
    console.log(this.Std);
    this.StuClass();
    console.log(this.Std);

  }
  Stu() {
    this.Std = this.auth.currentUserValue;
    return this.Std
  }
  StuClass() {
    this.fypPfeService.StudentClass(this.auth.currentUserValue.id).subscribe(
      (fypts => {
        this.Stds = fypts as User[];


        this.Stds.push;

        console.log(this.Stds);

      }))

    return this.Stds
  }
  DirecteurFyp() {

  }
}
