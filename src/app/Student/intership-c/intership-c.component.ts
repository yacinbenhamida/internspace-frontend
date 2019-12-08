import { Component, OnInit } from '@angular/core';
import { FypConvention } from '../../models/fyp/fyp-convention';
import { FypConventionService } from './../../services/fyp-convention/fyp-convention.service';
import Student from 'src/app/models/Student';
import{ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-intership-c',
  templateUrl: './intership-c.component.html',
  styleUrls: ['./intership-c.component.css']
})
export class IntershipCComponent implements OnInit {

  allFypConvention: FypConvention[];
  fypConvention: FypConvention;
  allStudent: Student[];
  id:number
  show:boolean=true;
  showb:boolean=true;
  text:String="cancellation request"

  constructor( private fypConventionService: FypConventionService,private ar:ActivatedRoute,private router: Router) {
    
   }

  ngOnInit() { 
   // this.getList();
    this.fypConventionService.findStudentConvention('2').subscribe(fypts => {
      this.allStudent = fypts as Student[];
      console.log(this.allStudent);})
      this.ar.paramMap.subscribe(res=>this.id=Number(res.get('id')));
  }
   
  getList(){
    this.fypConventionService.GetFypConvention().subscribe((x:FypConvention[])=>{
      this.allFypConvention =x});

    }
  delete(){
      this.fypConventionService.deleteConvention("16").subscribe((x:any)=>{
        console.log(this.allStudent)});
  
      }

    affichage(){ 
     
     
      this.router.navigate(['/create']);
  } 

  demande(){
    if(this.text == "cancellation request"){
      
      
      this.text="Request sent";
    }
  }

}