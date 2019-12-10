import { Component, OnInit } from '@angular/core';
import { FypConvention } from '../models/fyp/fyp-convention';
import { FypConventionService } from './../services/fyp-convention/fyp-convention.service';
import Student from 'src/app/models/Student';
import{ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-fyp-convention',
  templateUrl: './fyp-convention.component.html',
  styleUrls: ['./fyp-convention.component.css']
})
export class FypConventionComponent implements OnInit {


  allFypConvention: FypConvention[];
  allStudent: Student[];
  id:number
  constructor( private fypConventionService: FypConventionService,private ar:ActivatedRoute) {
    
   }

  ngOnInit() { 
   // this.getList();
    this.fypConventionService.findStudentConvention(10).subscribe(fypts => {
      this.allStudent = fypts as Student[];
      console.log(this.allStudent);})
      this.ar.paramMap.subscribe(res=>this.id=Number(res.get('id')));
  }
   
  getList(){
    this.fypConventionService.GetFypConvention().subscribe((x:FypConvention[])=>{
      this.allFypConvention =x});

    }


}


