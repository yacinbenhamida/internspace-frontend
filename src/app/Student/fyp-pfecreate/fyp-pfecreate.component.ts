import { Component, OnInit , Input} from '@angular/core';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FypPFEService } from 'src/app/services/student/fyp-pfe.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fyp-pfecreate',
  templateUrl: './fyp-pfecreate.component.html',
  styleUrls: ['./fyp-pfecreate.component.css']
})
export class FypPFECreateComponent implements OnInit {

  @Input() fypfile:FypFile;
  constructor(private fypPfeService: FypPFEService, router: Router) { }

  ngOnInit() {
  }
  pfeForm= new FormGroup({ //c'est un formulaire root 
    'title':new FormControl('', [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    'description':new FormControl('', [Validators.required,Validators.minLength(3)]),
     
    
    
    
    });
    getInfo(x)
    {
    console.log(this.pfeForm); 
    this.create();
    }

    create(){
      this.fypPfeService.createIntership(this.pfeForm.value,"12","true","false","false","false").subscribe(
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
}
