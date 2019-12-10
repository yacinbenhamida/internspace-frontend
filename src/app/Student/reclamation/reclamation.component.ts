import { Component, OnInit } from '@angular/core';
import { FypPFEService } from 'src/app/services/student/fyp-pfe.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  text:string 

  constructor(private fypPfeService: FypPFEService, private router: Router,private auth:AuthenticationService) { }

  ngOnInit() {

    this.getInfo();
  }

  pfeForm= new FormGroup({ //c'est un formulaire root 
    'text':new FormControl('', [Validators.required,Validators.minLength(3)]),
      //chaque element est FormControl //Validator:fonction synchrone
    
     
    
    
    
    });


  send(){
     
    this.fypPfeService.Reclamation(this.text,this.auth.currentUserValue.id.toString()).subscribe(
      (data: any) => {
       
        console.log(data);
      
      //this.currFYPSubject = data[index];
    
      this.router.navigate(['/student/reclamation']);
      });
      
    }

    getInfo(){
      this.send();
    }

}
