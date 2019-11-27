import { Component, OnInit , Input} from '@angular/core';
import { FypConvention } from '../../models/fyp/fyp-convention';
import { FypConventionService } from './../../services/fyp-convention/fyp-convention.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intership-create',
  templateUrl: './intership-create.component.html',
  styleUrls: ['./intership-create.component.css']
})
export class IntershipCreateComponent implements OnInit {

  @Input() fypConvention:FypConvention;
  //fypConventions:FypConvention[];
  router: Router;
  constructor( private fypConventionService: FypConventionService, router: Router) { }

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
      this.fypConventionService.createIntership(this.conForm.value,"8").subscribe((data: {}) => {
        this.router.navigate([]);
      })
  
      }

 

}
