import { Component, OnInit } from '@angular/core';
import { FypConvention } from '../../models/fyp/fyp-convention';
import { FypConventionService } from './../../services/fyp-convention/fyp-convention.service';
import Student from 'src/app/models/Student';
import{ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

import { User } from 'src/app/models/User';
import { FypPFEService } from 'src/app/services/student/fyp-pfe.service';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { StudyClass } from 'src/app/models/studyClass';

@Component({
  selector: 'app-intership-c',
  templateUrl: './intership-c.component.html',
  styleUrls: ['./intership-c.component.css']
})
export class IntershipCComponent implements OnInit {

  allFypConvention: FypConvention[];
  fypConvention: FypConvention;
  allStudent: Student[];
  id:number
  show:boolean=true;
  showb:boolean=true;
  text:String="cancellation request";
  Std:User;
  Stds:User[];
  allf:FypConvention[];
  index:number;
  save:string="cancel"

  constructor(private fypPfeService:FypPFEService, private fypConventionService: FypConventionService,private ar:ActivatedRoute,private router: Router,private auth:AuthenticationService) {
    
   }

  ngOnInit() { 
   // this.getList();
    this.fypConventionService.findStudentConvention(this.auth.currentUserValue.id).subscribe(fypts => {
      this.allStudent = fypts as Student[];
      console.log(this.allStudent);})
      this.ar.paramMap.subscribe(res=>this.id=Number(res.get('id')));

      this.auth.currentUserValue;
      this.Std = this.Stu();
      console.log(this.Std);
     // this.StuClass();
      console.log(this.Std);
      this.allStudent= this. getStd();
      this.allStudent;
      console.log(this.allStudent);
      console.log(this.allStudent);
      this.cancel(this.index);

  }


  Stu(){
    this.Std=this.auth.currentUserValue;
    return this.Std
  }
 
  
   getStd(){
    this.fypConventionService.findStudentConvention(this.auth.currentUserValue.id).subscribe(fypts => {
      this.allStudent = fypts as Student[];
      console.log(this.allStudent);
      this.allStudent.push;
    
    })
    return this.allStudent;
      //this.ar.paramMap.subscribe(res=>this.id=Number(res.get('id')));
   }
  getList(){
    this.fypConventionService.GetFypConvention().subscribe((x:FypConvention[])=>{
      this.allFypConvention =x});

    }
  delete(){
      this.fypConventionService.deleteConvention("16").subscribe((x:any)=>{
        console.log(this.allStudent)});
  
      }

    affichage(){ 
     
     
      this.router.navigate(['/create']);
  } 

  demande(){
    if(this.text == "cancellation request"){
      
      
      this.text="Request sent";
    }

  }


  cancel(index:number){
    this.fypConventionService.cancel(index).subscribe(fypts => {
      this.allf = fypts as FypConvention[];
      console.log(this.allf);
      this.allf.push;
  });
}

Canceeel(){

if(this.save == "cancel"){
  this.save ="canceled"
}

}

}
