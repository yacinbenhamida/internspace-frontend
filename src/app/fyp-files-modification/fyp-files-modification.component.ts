import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../services/Teacher/teacher-service.service';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../services/security/authentication.service';
import { FypFileModification } from '../models/fyp/fyp-modification';
import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { FypFile } from '../models/fyp/fyp-file';

@Component({
  selector: 'app-fyp-files-modification',
  templateUrl: './fyp-files-modification.component.html',
  styleUrls: ['./fyp-files-modification.component.css']
})
export class FypFilesModificationComponent implements OnInit {
  FypFileModification:FypFileModification[];
  FypFile:FypFile;
  FypFileModi:FypFileModification;
  restApi: TeacherServiceService;
  router: Router;
  spresp:any;
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
  approve(x:FypFileModification,id:number)
  {
    this.FypFile=x.fyp;
    console.log(x.id+"."+x.fyp.id);
    console.log(this.FypFile)
    console.log(x);

    this.restApi.approveMajorModification(x.fyp.id,x.id).subscribe(resp => {
      this.ngOnInit();
      return this.spresp=resp;
    });

    console.log(this.spresp);  
  
      
  

  }

}
