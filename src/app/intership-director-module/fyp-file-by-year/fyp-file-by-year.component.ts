import { Component, OnInit } from '@angular/core';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';

@Component({
  selector: 'app-fyp-file-by-year',
  templateUrl: './fyp-file-by-year.component.html',
  styleUrls: ['./fyp-file-by-year.component.css']
})
export class FypFileByYearComponent implements OnInit {

  constructor(private _internshipDirectorService : InternshipDirectorService) { }

  ngOnInit() {
  }
  FYPFiles:FypFile[];
  searchInput:string="";
  selectValue:string="";
  ClickHandler =(xx)=>{
    this._internshipDirectorService.FypFileByYear(this.searchInput).subscribe(data=>this.FYPFiles=data);
    }
}
