import { Component, OnInit } from '@angular/core';
import { FypFile } from '../models/fyp/fyp-file';
import { TeacherServiceService } from '../services/Teacher/teacher-service.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/security/authentication.service';

@Component({
  selector: 'app-teacher-fypfiles',
  templateUrl: './teacher-fypfiles.component.html',
  styleUrls: ['./teacher-fypfiles.component.css']
})
export class TeacherFypfilesComponent implements OnInit {
  selectedfyp: string;
  state:true;
  private lastSelectedCategory: FypFile;
  fypllist:FypFile[];
  fypCache: string[]=['pending','prevalidated','supervised','protractored'];
  restApi: TeacherServiceService;
  router: Router;
  constructor(
    private auth:AuthenticationService,
     restApi: TeacherServiceService, 
     router: Router
  ) {this.restApi=restApi;
  this.router=router;}

  ngOnInit() {
   

  }
  onChange_fyp(){
    console.log(document.querySelector('select').value);
    if (document.querySelector('select').value=="pending")
    {
      this.state=true;
     this.restApi.GetFYPFILEPending().subscribe(files => {
      this.fypllist = files as FypFile[]});
      console.log(this.fypllist);

    }
    if (document.querySelector('select').value=="prevalidated")
    {
      this.state=true;
      this.restApi.GetPrevalidatedFyp(2).subscribe(files => {
        this.fypllist = files as FypFile[]});
        console.log(document.querySelector('select').value);
        console.log(this.fypllist);
    }
    if (document.querySelector('select').value=="supervised")
    {
      this.state=true;
      this.restApi.GetSupervisedFyp(35).subscribe(files => {
        this.fypllist = files as FypFile[]});
        console.log(document.querySelector('select').value);
        console.log(this.fypllist);
    }


  
}
  }

