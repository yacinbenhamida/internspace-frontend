import { Component, OnInit , Input} from '@angular/core';
import { FypConvention } from '../../models/fyp/fyp-convention';
import { FypConventionService } from './../../services/fyp-convention/fyp-convention.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/users/Company';
import { FypPFEService } from 'src/app/services/student/fyp-pfe.service';
import { Employee } from 'src/app/models/users/Employee';
import { FypFile } from 'src/app/models/fyp/fyp-file';


@Component({
  selector: 'app-intership-update',
  templateUrl: './intership-update.component.html',
  styleUrls: ['./intership-update.component.css']
})
export class IntershipUpdateComponent implements OnInit {

  @Input() fypConvention:FypConvention;
   comp:Company[];
   emp:Employee[];
   ffView:FypFile[];
  //fypConventions:FypConvention[];
  router: Router;
  allFypConvention: FypConvention[];
  constructor( private fypConventionService: FypConventionService, router: Router,private fypPfeService: FypPFEService) { }

  ngOnInit() {
    this.viewFilePFE();
  }
  conForm= new FormGroup({ //c'est un formulaire root 
    'startDate':new FormControl('', [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    'endDate':new FormControl('', [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    'companySupervisorEmail':new FormControl('', [Validators.required,Validators.minLength(3)]),
    'company':new FormControl('comp'),
    
    
    });

    viewFilePFE(){
      this.fypPfeService.ViewFypFile("056210").subscribe(
        (fypts => {
          this.ffView = fypts as FypFile[];
          this.ffView.push;
         
          
        
          console.log(fypts);
        }));
        
        
        return this.ffView;

     }
    DirecteurFyp(){
      this.fypPfeService.DirecteurFyp("056210").subscribe(
        (fypts => {
          this.emp = fypts as Employee[];
         
          console.log(this.emp);
          
        }));
    }
    getInfo(x)
    {
    console.log(this.conForm); 
    this.find();
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


    find(){
      this.fypConventionService.findStudentConvention(this.conForm.value).subscribe(
        (data: any) => {
          console.log(data);
        });
        
      }

}
