import { Component, OnInit } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { FypFile } from 'src/app/models/fyp/fyp-file';

@Component({
  selector: 'app-fyp-file-by-category',
  templateUrl: './fyp-file-by-category.component.html',
  styleUrls: ['./fyp-file-by-category.component.css']
})
export class FypFileByCategoryComponent implements OnInit {

  constructor(private _internshipDirectorService : InternshipDirectorService) { }

  ngOnInit() {
  }
  option2:string[]=["select an option","Consulting","Research"];
  FYPFiles:FypFile[];
  searchInput:string="";
  selectValue:string="";
  ClickHandler =(xx)=>{
    this._internshipDirectorService.FypFileByCategory(this.selectValue).subscribe(data=>this.FYPFiles=data);
    }
}
