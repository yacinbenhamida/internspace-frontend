import { Component, OnInit } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-fyp-file-by-category',
  templateUrl: './fyp-file-by-category.component.html',
  styleUrls: ['./fyp-file-by-category.component.css']
})
export class FypFileByCategoryComponent implements OnInit {

  constructor(private _internshipDirectorService : InternshipDirectorService, private auth:AuthenticationService) { }
  allFYPFiles:FypFile[]=[];
  selectedFYPFiles: FypFile[]=[];
  clicked=false;
  ngOnInit() {
    this._internshipDirectorService.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe(
      data=>{data.forEach((item)=>this.allFYPFiles.push(item.fypFile))}
      )
    console.log(this.allFYPFiles)
 
  }

  option2:string[]=["select an option","Consulting","Research"];
  FYPFiles:FypFile[];
  searchInput:string="";
  selectValue:string="";
  
  ClickHandler =(xx)=>{
    this.clicked=true;
   
    this.selectedFYPFiles=[];
    //this._internshipDirectorService.FypFileByCategory(this.selectValue).subscribe(data=>this.FYPFiles=data);
    this.allFYPFiles.forEach((item)=>{
      item.categories.forEach((i)=>{
        if(i.name == xx){
        this.selectedFYPFiles.push(item)
      }
    })
      
    })
    }

    
}
