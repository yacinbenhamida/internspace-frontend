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
  allStudent: Student[];
  id:number
  show:boolean=true;
  showb:boolean=true;

  constructor( private fypConventionService: FypConventionService,private ar:ActivatedRoute,private router: Router) {
    
   }

  ngOnInit() { 
   // this.getList();
    this.fypConventionService.findStudentConvention('10').subscribe(fypts => {
      this.allStudent = fypts as Student[];
      console.log(this.allStudent);})
      this.ar.paramMap.subscribe(res=>this.id=Number(res.get('id')));
  }
   
  getList(){
    this.fypConventionService.GetFypConvention().subscribe((x:FypConvention[])=>{
      this.allFypConvention =x});

    }


    affichage(){ 
      if(this.show==true){
      this.show = false;
     
      this.router.navigate(['/create']);}
  } 

}
