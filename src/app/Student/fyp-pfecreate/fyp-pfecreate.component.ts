import { Component, OnInit , Input} from '@angular/core';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FypPFEService } from 'src/app/services/student/fyp-pfe.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FYPSubject } from 'src/app/models/fyp/fyp-subject';

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
  index :number
  constructor(private fypPfeService: FypPFEService, private router: Router) { }

  ngOnInit() {
    this.fypPfeService.GetFyp().subscribe(fypts => {
      this.ff = fypts as FypFile[];
      this.ff.push;
      console.log(this.fYPSubject);

      if (this.ff === null || this.ff.length === 0) {

        this.currFypFile = this.GetFypSubject();


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
    this.router.navigate(['/create']);
  } 
    
    

    create(){
     
      this.fypPfeService.createIntership(this.pfeForm.value,"10").subscribe(
        (data: any) => {
         
          console.log(data);
        
        //this.currFYPSubject = data[index];
        
        console.log(this.currFYPSubject);
        });
        
      }
      getS(){
        this.fypPfeService.GetFypSubject().subscribe(
          (data: any) => {
           
            console.log(data);
          });
          
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
