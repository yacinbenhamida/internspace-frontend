import { Component, OnInit } from '@angular/core';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-fyp-file-by-state',
  templateUrl: './fyp-file-by-state.component.html',
  styleUrls: ['./fyp-file-by-state.component.css']
})
export class FypFileByStateComponent implements OnInit {

  constructor(private _internshipDirectorService : InternshipDirectorService, private auth:AuthenticationService) { }
  allFYPFiles:FypFile[]=[];
  selectedFYPFiles: FypFile[]=[];
  ngOnInit() {
    this._internshipDirectorService.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe(
      data=>{data.forEach((item)=>this.allFYPFiles.push(item.fypFile))}
      )
    console.log(this.allFYPFiles)
 
  }

  option2:string[]=["select an option","pending","confirmed","declined"];
  FYPFiles:FypFile[];
  searchInput:string="";
  selectValue:string="";
  clicked=false;
  ClickHandler =(xx)=>{
    this.clicked=true;
    this.selectedFYPFiles=[];
    this._internshipDirectorService.FypFileByCategory(this.selectValue).subscribe(data=>this.FYPFiles=data);
    this.allFYPFiles.forEach((item)=>{
        if(item.fileStatus == xx){
        this.selectedFYPFiles.push(item)
      }
      
    })
    }

}
