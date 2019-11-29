import { Component, OnInit , Input} from '@angular/core';
import { FypConvention } from '../../models/fyp/fyp-convention';
import { FypConventionService } from './../../services/fyp-convention/fyp-convention.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/users/Company';


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
  constructor( private fypConventionService: FypConventionService, router: Router) { }

  ngOnInit() {
  }

  conForm= new FormGroup({ //c'est un formulaire root 
    'startDate':new FormControl('', [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    'endDate':new FormControl('', [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    'companySupervisorEmail':new FormControl('', [Validators.required,Validators.minLength(3)]),
    'company':new FormControl('comp'),
    
    
    });
    getInfo(x)
    {
    console.log(this.conForm); 
    this.create();
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


    create(){
      this.fypConventionService.createIntership(this.conForm.value,"8").subscribe(
        (data: any) => {
          console.log(data);
        });
        
      }

}
