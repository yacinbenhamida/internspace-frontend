import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-files-by-diff-crit',
  templateUrl: './files-by-diff-crit.component.html',
  styleUrls: ['./files-by-diff-crit.component.css']
})
export class FilesByDiffCritComponent implements OnInit {
  selectTest: boolean = true;
  state:string="";
  year:string="";
  location:string="";
  list:FypFile[]=[];
  hideState:boolean=true;
  allStudents:User[]=[];
  allFYPFiles:FypFile[]=[];
  myRes:FypFile[]=[];
  constructor(private _internshipDirectorService : InternshipDirectorService, private auth:AuthenticationService) { }

  ngOnInit() {
     this._internshipDirectorService.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe(data=>{this.allStudents=data,this.allStudents.map(
       x=>{
         if(x.isCreated){
         this.allFYPFiles.push(x.fypFile)
       
       }
         
       })
     
     
     })
       
    
   }

  selectChanged(e){
    if(e.target.selectedIndex==0){
      this.selectTest=true;
    }else{
      this.selectTest=false;
    }
  }
  haha=()=>{
    this._internshipDirectorService.FypFileByDiffSpecfique(this.state,this.year,this.location).subscribe(data=>{this.list=data;
    console.log(this.allFYPFiles)
    this.allFYPFiles.map(x=>{
     this.list.map(xx=>{
       if(x.id==xx.id)
       this.myRes.push(x);
     })
    })

  }
    )
  };
}
