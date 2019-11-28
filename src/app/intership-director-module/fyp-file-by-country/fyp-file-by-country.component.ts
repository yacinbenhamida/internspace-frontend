import { Component, OnInit } from '@angular/core';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';

@Component({
  selector: 'app-fyp-file-by-country',
  templateUrl: './fyp-file-by-country.component.html',
  styleUrls: ['./fyp-file-by-country.component.css']
})
export class FypFileByCountryComponent implements OnInit {

  constructor(private _internshipDirectorService : InternshipDirectorService) { }

  ngOnInit() {
  }
  FYPFiles:FypFile[];
  searchInput:string="";
  selectValue:string="";
  ClickHandler =(xx)=>{
    this._internshipDirectorService.FypFileByCountry(this.searchInput).subscribe(data=>this.FYPFiles=data);
    }

}
