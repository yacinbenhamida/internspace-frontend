import { Component, OnInit } from '@angular/core';
import { FypConvention } from '../../models/fyp/fyp-convention';
import { FypConventionService } from './../../services/fyp-convention/fyp-convention.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-intership-create',
  templateUrl: './intership-create.component.html',
  styleUrls: ['./intership-create.component.css']
})
export class IntershipCreateComponent implements OnInit {

  fypConvention:FypConvention;
  fypConventions:FypConvention[];
  constructor( private fypConventionService: FypConventionService) { }

  ngOnInit() {
  }

  conForm= new FormGroup({ //c'est un formulaire root 
    'startDate':new FormControl('', [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    'email': new FormControl('',[Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]), 
    
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
    get email()
    {
      return this.conForm.get('email');
    }
   
    create(){
      this.fypConventionService.createIntership(this.fypConvention,"2").subscribe((x:FypConvention[])=>{
        this.fypConventions =x});
  
      }

  onSubmit(convForm,startDate){
    console.log(convForm);
    console.log(startDate); 
    
    

  }

}
