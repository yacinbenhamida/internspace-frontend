import { Component, OnInit } from '@angular/core';
import { FypFile } from '../models/fyp/fyp-file';
import { TeacherServiceService } from '../services/Teacher/teacher-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-fypfiles',
  templateUrl: './teacher-fypfiles.component.html',
  styleUrls: ['./teacher-fypfiles.component.css']
})
export class TeacherFypfilesComponent implements OnInit {
  selectedfyp: FypFile;
  private lastSelectedCategory: FypFile;

  fypCache: FypFile[];
  restApi: TeacherServiceService;
  router: Router;
  constructor(
     restApi: TeacherServiceService, 
     router: Router
  ) {this.restApi=restApi;
  this.router=router;}

  ngOnInit() {
   
  }
  onChange_fyp(type:string){
    if (type=="pending")
    {
     // this.fypCache= this.restApi.GetFYPFILEPending();

    }

  }
}
