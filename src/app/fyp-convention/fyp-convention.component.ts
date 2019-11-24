import { Component, OnInit } from '@angular/core';
import { FypConvention } from '../models/fyp/fyp-convention';

@Component({
  selector: 'app-fyp-convention',
  templateUrl: './fyp-convention.component.html',
  styleUrls: ['./fyp-convention.component.css']
})
export class FypConventionComponent implements OnInit {


  allFypConvention: FypConvention[];
  constructor() { }

  ngOnInit() {
  }

}
