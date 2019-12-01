import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../services/Teacher/teacher-service.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/security/authentication.service';
import { FypFileModification } from '../models/fyp/fyp-modification';

@Component({
  selector: 'app-fyp-files-modification',
  templateUrl: './fyp-files-modification.component.html',
  styleUrls: ['./fyp-files-modification.component.css']
})
export class FypFilesModificationComponent implements OnInit {
  FypFileModification:FypFileModification[];
  restApi: TeacherServiceService;
  router: Router;
  constructor(
    private auth:AuthenticationService,
     restApi: TeacherServiceService, 
     router: Router
  ) {this.restApi=restApi;
  this.router=router;}

  ngOnInit() {
    this.restApi.GetFYPFIemodifications().subscribe(files => {
      this.FypFileModification = files as FypFileModification[]});
      console.log(this.FypFileModification);

  }

}
