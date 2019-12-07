import { Component, OnInit } from '@angular/core';
import { FypPFEService } from 'src/app/services/student/fyp-pfe.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FYPSubject } from 'src/app/models/fyp/fyp-subject';
import { FYPFeature } from 'src/app/models/fyp/fyp-features';
import { Student } from 'src/app/models/users/student';
import { User } from 'src/app/models/User';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-fyp-file-details',
  templateUrl: './fyp-file-details.component.html',
  styleUrls: ['./fyp-file-details.component.css']
})
export class FypFileDetailsComponent implements OnInit {
  currFypFile: FypFile;
  fYPSubject:FYPSubject[];
  ff: FypFile[];
  text:String="Update Fyp PFE";
  currFYPSubject: FYPSubject;
  currentFeatures: FYPFeature[];
  currentFeatur: FYPFeature;
  ffView:FypFile[];
  ffViewww:FypFile[];
  Std:User;
  Stds:User[];
  indexx : number
  
  constructor(private fypPfeService: FypPFEService, private router: Router,private auth:AuthenticationService) { }

  ngOnInit() {

            this.auth.currentUserValue;
             this.Std = this.Stu();
    
             
             console.log(this.Std);

this.viewFilePFE();
this.fypPfeService.ViewFypFile(this.auth.currentUserValue.cin.toString()).subscribe(
  (fypts => {
    this.ffView = fypts as FypFile[];
    this.ffView.push;
   
     this.currFypFile = this.ffView[0];

    console.log(fypts);
    console.log(this.currFypFile );
  }));

  }
  viewFilePFE(){
    this.fypPfeService.ViewFypFile(this.auth.currentUserValue.cin.toString()).subscribe(
      (fypts => {
        this.ffView = fypts as FypFile[];
        this.ffView.push;
       
         this.currFypFile = this.ffView[0];

        console.log(fypts);
        console.log(this.currFypFile );
      }));
      return    this.currFypFile
   }

Stu(){
  this.Std=this.auth.currentUserValue;
  return this.Std
}

exportTemplate() {
  const data = document.getElementById('template-editor-window');
  html2canvas(data).then(canvas => {
    // Few necessary setting options
    const imgWidth = 208;
    const pageHeight = 295;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    const heightLeft = imgHeight;

    const contentDataURL = canvas.toDataURL('image/png');
    const pdf = new jspdf('p', 'mm', 'a4');
    const position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    pdf.save(this.currFypFile.title + '.pdf');
  });
}




}
