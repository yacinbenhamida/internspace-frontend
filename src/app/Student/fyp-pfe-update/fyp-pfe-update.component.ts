import { Component, OnInit } from '@angular/core';
import { FypPFEService } from 'src/app/services/student/fyp-pfe.service';
import { Router } from '@angular/router';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FYPSubject } from 'src/app/models/fyp/fyp-subject';

@Component({
  selector: 'app-fyp-pfe-update',
  templateUrl: './fyp-pfe-update.component.html',
  styleUrls: ['./fyp-pfe-update.component.css']
})
export class FypPfeUpdateComponent implements OnInit {

  currFypFile: FypFile;
  fYPSubject:FYPSubject[];
  ff: FypFile[];
  text:String="Update Fyp PFE";
  currFYPSubject: FYPSubject;
  ffView:FypFile[];
  
  constructor(private fypPfeService: FypPFEService, private router: Router) { }

  ngOnInit() {
    this.getFilee();
    this.viewFilePFE();

  }

  pfeForm= new FormGroup({ //c'est un formulaire root 
    'title':new FormControl('', [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    'description':new FormControl('', [Validators.required,Validators.minLength(3)]),
    'isCanceled':new FormControl('false'),
    'isArchived':new FormControl('false'),
    'isPrevalidated':new FormControl('false'),
    'isConfirmed':new FormControl('false' ),
    'fileStatus':new FormControl('pending' ),
    'problematic':new FormControl('', ),
    'subject':new FormControl(''),
     
    
    
    
    });

    GetFypSubject() {
   
      const subject = [
        {
          'id': 0,
          'title': 'title',
          'content': 'title',
          'maxApplicants': '0',
          'country': 'f',
          'fypFile': null,
          'company': null,
          'studentSubjects': null,
      
          'categories': null,
          'FYPCategory':null
        }
   
      ];
  
      return { id: 0, title: 'Untitled', description: 'Untitled', problematic :'Untitled' , fileStatus :'Untitled', finalMark :0, isCanceled :false,
      isArchived :false, isPrevalidated :false, isConfirmed :false, subject , features :null, interventions :null, keywords :null, categories :null};
    }
    getFilee(){
      this.fypPfeService.GetFypSubject().subscribe(
        (fypts => {
          this.fYPSubject = fypts as FYPSubject[];
         
          console.log();
          this.fYPSubject.push ;
          
          console.log(this.currFYPSubject);
         
        }))
  
       return  this.fYPSubject;
       
    }
    onChange_FYPSubjectIndex(index: number) {
      this.fypPfeService.GetFypSubject().subscribe(
        (data: any) => {
         
          console.log(data);
          this.currFYPSubject = data[index];
          
          console.log(this.currFYPSubject);
         
        });
       //this.getS();
      
      //console.log(this.currFYPSubject);
    }

  editFile(){
    this.fypPfeService.editFile(this.pfeForm.value,"12").subscribe(
      (data => {
        console.log(data);
      
       
      }))

  }

  viewFilePFE(){
    this.fypPfeService.ViewFypFile("1100").subscribe(
      (fypts => {
        this.ffView = fypts as FypFile[];
        this.ffView.push;
       
         this.currFypFile = this.ffView[0];

        console.log(fypts);
      }));
      return    this.currFypFile
   }
  getInfo( )
    {
      this.editFile();
    console.log(this.pfeForm); 
    }

}
