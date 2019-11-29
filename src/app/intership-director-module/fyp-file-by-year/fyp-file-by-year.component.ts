import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-fyp-file-by-year',
  templateUrl: './fyp-file-by-year.component.html',
  styleUrls: ['./fyp-file-by-year.component.css']
})
export class FypFileByYearComponent implements OnInit {

  allFYPFiles:FypFile[];
  FYPFiles:FypFile[];
  results:FypFile[];
  searchInput:string="";
  selectValue:string="";
  constructor(private _internshipDirectorService : InternshipDirectorService, private auth:AuthenticationService) { 
    this.allFYPFiles = [];
    this.FYPFiles = [];
    this.results = [];
  }
  
  ngOnInit() {
    this._internshipDirectorService.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe(
      data=>{data.forEach((item)=>this.allFYPFiles.push(item.fypFile))}
      )
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log("here");
    

  }
  ClickHandler =(xx)=>{
    this.results=[];
    this._internshipDirectorService.FypFileByYear(this.searchInput).subscribe(data=>{
      this.FYPFiles=data
      this.allFYPFiles.forEach((element) => {
        this.FYPFiles.forEach(x=>{
        if(x.id===element.id){
            this.results.push(element)
        }
      })
      });
    });
    
    }
}
