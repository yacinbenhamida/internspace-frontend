import { Component, OnInit , Input} from '@angular/core';
import { FypConvention } from '../../models/fyp/fyp-convention';
import { FypConventionService } from './../../services/fyp-convention/fyp-convention.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/users/Company';
import { AuthenticationService } from 'src/app/services/security/authentication.service';


@Component({
  selector: 'app-intership-create',
  templateUrl: './intership-create.component.html',
  styleUrls: ['./intership-create.component.css']
})
export class IntershipCreateComponent implements OnInit {

  @Input() fypConvention:FypConvention;
   comp:Company[];

  //fypConventions:FypConvention[];
  router: Router;
  allFypConvention: FypConvention[];
  currentCompany: Company;
  compagnies: Company[];
  index:number;
  show:boolean =true;
  showw:boolean=false;
  constructor( private fypConventionService: FypConventionService, router: Router,private auth:AuthenticationService) { }

  ngOnInit() {

    this.getFilee();
    this.compagnies = this.getFilee();
    console.log(this.compagnies); 
    this.onChange_FYPSubjectIndex(this.index)
    

  }

  conForm= new FormGroup({ //c'est un formulaire root 
    'startDate':new FormControl('', [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    'endDate':new FormControl('', [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    'companySupervisorEmail':new FormControl('', [Validators.required,Validators.minLength(3)]),
    'company':new FormControl(),
    
    
    });
    getInfo(x)
    {
    console.log(this.conForm); 
    this.create();
    if(this.show == true)
    {
      this.show = false;
      this.showw = true;
    }
    }
    
    get startDate()
    {
      return this.conForm.get('startDate'); 
    }
    get endDate()
    {
      return this.conForm.get('endDate'); 
    }

    get companySupervisorEmail()
    {
      return this.conForm.get('companySupervisorEmail'); 
    }
    get company()
    {
      return this.conForm.get('company'); 
    }
 onChange_FYPSubjectIndex(index: number) {
      this.fypConventionService.getCompany().subscribe(
        (data: any) => {
  
          console.log(data);
          this.currentCompany = data[index];
  
          console.log(this.currentCompany);
  
        });
       //this.getS();
  
      //console.log(this.currFYPSubject);
    }

    getFilee(){
      this.fypConventionService.getCompany().subscribe(
        (fypts => {
          this.compagnies = fypts as Company[];
  
          console.log();
          this.compagnies.push ;
  
          console.log(this.compagnies);
  
        }))
  
       return  this.compagnies;
  
    }
    create(){
      this.fypConventionService.createIntership(this.conForm.value,this.auth.currentUserValue.id.toString()).subscribe(
        (data: any) => {
          console.log(data);
        });
        
      }

}
