import { Component, OnInit } from '@angular/core';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';

@Component({
  selector: 'app-fyp-file-by-state',
  templateUrl: './fyp-file-by-state.component.html',
  styleUrls: ['./fyp-file-by-state.component.css']
})
export class FypFileByStateComponent implements OnInit {

  constructor(private _internshipDirectorService : InternshipDirectorService) { }

  ngOnInit() {
  }
  options:string[]=["select an option","pending","confirmed","declined"];
  FYPFiles:FypFile[];
  searchInput:string="";
  selectValue:string="";
  ClickHandler =(xx)=>{
    this._internshipDirectorService.FypFileByState(this.selectValue).subscribe(data=>this.FYPFiles=data);
    }

}
