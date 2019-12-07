import { Component, OnInit , Input} from '@angular/core';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FypPFEService } from 'src/app/services/student/fyp-pfe.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FYPSubject } from 'src/app/models/fyp/fyp-subject';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { Employee } from 'src/app/models/users/Employee';

@Component({
  selector: 'app-fyp-pfecreate',
  templateUrl: './fyp-pfecreate.component.html',
  styleUrls: ['./fyp-pfecreate.component.css']
})
export class FypPFECreateComponent implements OnInit {

  @Input() fypfile:FypFile;
 fYPSubject:FYPSubject[];
  currFYPSubject: FYPSubject;
  currFypFile: any;
  ff: FypFile[];
  ffView:FypFile[];
  emp:Employee;
  employes:Employee[];
  index :number
  show:boolean=true;
  showPFE:boolean=false;
  text:String="Create Fyp PFE";
  viewCreate:boolean = true;

  constructor(private fypPfeService: FypPFEService, private router: Router,private auth:AuthenticationService) { }

  ngOnInit() {
    this.getFilee();
    this.fypPfeService.DirecteurFyp(this.auth.currentUserValue.id.toString()).subscribe(
      (fypts => {
        this.employes = fypts as Employee[];
        this.employes.push;
       
        console.log(this.employes);
        if ( this.employes.length > 0) {

          this.emp = this.employes[0];
         
          console.log(this.emp);
          console.log(this.emp.role);
  
        } 
        
      }));
    
    this.employes=this.DirecteurFyp();
    console.log(this.employes);
    this.viewFilePFE();
  
    this.fypPfeService.GetFyp().subscribe(fypts => {
      this.ff = fypts as FypFile[];
      this.ff.push;
      console.log(this.fYPSubject);

      if (this.ff === null || this.ff.length === 0) {

        this.currFypFile = this.GetFypSubject();
        
        this.fYPSubject = this.getFilee();
        console.log(this.fYPSubject);

      } else {
        this.currFypFile = this.ff[0];
        
      }

      console.log(this.currFYPSubject);

    });
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


  GetSubject() {
   
      
    

    return { id: 0, title: 'Untitled', content: 'Untitled', maxApplicants :'Untitled' , country :'Untitled', fypFile :null, company :null,
    studentSubjects :null, categories :null};
  }

  GetEmp() {
   
      
    

    return { id: 0, birthDate: 'Untitled', role: 'Untitled', site :'Untitled' , interventions :null, department :null, firstName :'null',
    email :'null'};
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
    getInfo( )
    {
    console.log(this.pfeForm); 
    this.create();
    this.viewFilePFE();
    if(this.show ==true){
     
      this.text="Your Fyp File";
    }
   
    
  } 
    
    

    create(){
     
      this.fypPfeService.createIntership(this.pfeForm.value,this.auth.currentUserValue.id.toString()).subscribe(
        (data: any) => {
         
          console.log(data);
        
        //this.currFYPSubject = data[index];
        
        console.log(this.currFYPSubject);
        if(this.show ==true){
      
          this.show=false; 
          this.showPFE=true;
          this.text="Your Fyp File";
        }
      
        //this.router.navigate(['/create']);
        });
        
      }
      getS(){
        this.fypPfeService.GetFypSubject().subscribe(
          (data: any) => {
           
            console.log(data);
          });
          
     }
    
     viewFilePFE(){
      this.fypPfeService.ViewFypFile(this.auth.currentUserValue.cin.toString()).subscribe(
        (fypts => {
          this.ffView = fypts as FypFile[];
          this.ffView.push;
         
          if(this.ffView.length == 0){
            this.viewCreate = true;
        }
        else
        {
          this.viewCreate = false;
          this.showPFE=true;
        }
        
          console.log(fypts);
        }));
        
        
        return this.ffView;

     }
DirecteurFyp(){
  console.log(this.employes);
  this.fypPfeService.DirecteurFyp(this.auth.currentUserValue.id.toString()).subscribe(
    (fypts => {
      this.employes = fypts as Employee[];
      this.employes.push;
     
     
      console.log(this.employes);
      
    }));
    return this.employes;
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
      
}
