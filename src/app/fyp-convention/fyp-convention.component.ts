import { Component, OnInit } from '@angular/core';
import { FypConvention } from '../models/fyp/fyp-convention';
import { FypConventionService } from './../services/fyp-convention/fyp-convention.service';

@Component({
  selector: 'app-fyp-convention',
  templateUrl: './fyp-convention.component.html',
  styleUrls: ['./fyp-convention.component.css']
})
export class FypConventionComponent implements OnInit {


  allFypConvention: FypConvention[];
  fypConventionService: FypConventionService;
  constructor( fypConventionService: FypConventionService) {
    
   }

  ngOnInit() { 
    this.getList();
  }
   
  getList(){
    this.fypConventionService.GetFypConvention().subscribe((x:FypConvention[])=>{
      this.allFypConvention =x});

    }


}


