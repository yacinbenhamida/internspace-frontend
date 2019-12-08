import { Component, OnInit } from '@angular/core';
import { FypPFEService } from 'src/app/services/student/fyp-pfe.service';
import { Router } from '@angular/router';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FYPSubject } from 'src/app/models/fyp/fyp-subject';
import { FYPFeature } from 'src/app/models/fyp/fyp-features';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

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
  currentFeatures: FYPFeature[];
  currentFeatur: FYPFeature;
  ffView:FypFile[];
  ffViewww:FypFile[];
  indexx : number
  
  constructor(private fypPfeService: FypPFEService, private router: Router,private auth:AuthenticationService) { }

  ngOnInit() {
    this.getFilee();
    this.currFypFile = this.viewFilePFE();
    this.onChange_FYPFeaturesIndex(this.indexx);
    console.log(this.ffViewww);
    console.log(this.currFypFile );

     this.auth.currentUserValue.fypFile;
     console.log( this.auth.currentUserValue.fypFile);
     this.fypPfeService.ViewFypFile(this.auth.currentUserValue.cin.toString()).subscribe(
      (fypts => {
        this.ffView = fypts as FypFile[];
        this.ffView.push;
       
         this.currFypFile = this.ffView[0];

        console.log(fypts);
        console.log(this.currFypFile );
      }));
 
  }

  pfeForm= new FormGroup({ //c'est un formulaire root 
    'title':new FormControl(this.auth.currentUserValue.fypFile.title, [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    'description':new FormControl(this.auth.currentUserValue.fypFile.description, [Validators.required,Validators.minLength(3)]),
    'isCanceled':new FormControl('false'),
    'isArchived':new FormControl('false'),
    'isPrevalidated':new FormControl('false'),
    'isConfirmed':new FormControl('false' ),
    'fileStatus':new FormControl('pending' ),
    'problematic':new FormControl(this.auth.currentUserValue.fypFile.problematic,[Validators.required] ),
    'subject':new FormControl(''),
   /* 'features':new FormControl(this.addFeatureControl()),*/
     
    
    
    
    });

    /*addFeatureControl(){
      const arr = this.currentFeatures.map(e=>{
        return this.pfeForm.control(false)
      })
    }*/

ModifMajeur(){
  this.fypPfeService.ModifMajor(this.auth.currentUserValue.fypFile.id.toString()).subscribe(
    (fypts => {
      this.ffViewww = fypts as FypFile[];
      this.fYPSubject.push ;
      console.log(this.fYPSubject);
      
      
    })
  );
  
}
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


    onChange_FYPFeaturesIndex(index: number) {
      this.fypPfeService.Features().subscribe(
        (fypts => {
          this.currentFeatures = fypts as FYPFeature[];
         
          console.log( this.currentFeatures);
          this.currentFeatur = fypts [index];
          
          
         
        }));
       //this.getS();
      
      //console.log(this.currFYPSubject);
    }


  editFile(){
    this.fypPfeService.editFile(this.pfeForm.value,this.auth.currentUserValue.fypFile.id.toString()).subscribe(
      (data => {
        this.ffViewww = data as FypFile[];
        this.ffViewww.push;
        console.log(this.ffViewww);
      
        this.router.navigate(['/fyp/create']);
      }))

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
  getInfo( )
    {
      this.editFile();
      this.ModifMajeur()
     console.log(this.pfeForm); 
     
    }
    get title()
    {
      return this.pfeForm.get('title'); 
    }
    get description()
    {
      return this.pfeForm.get('description'); 
    }
    get isCanceled()
    {
      return this.pfeForm.get('isCanceled'); 
    }
    get isArchived()
    {
      return this.pfeForm.get('isArchived'); 
    }
    get isPrevalidated()
    {
      return this.pfeForm.get('isPrevalidated'); 
    }
    get isConfirmed()
    {
      return this.pfeForm.get('isConfirmed'); 
    }
    get problematic()
    {
      return this.pfeForm.get('problematic'); 
    }
    get subject()
    {
      return this.pfeForm.get('subject'); 
    }
    get features()
    {
      return this.pfeForm.get('features'); 
    }

}
