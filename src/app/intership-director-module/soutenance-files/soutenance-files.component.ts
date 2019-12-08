import { Component, OnInit } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { User } from 'src/app/models/User';
import { FypFile } from 'src/app/models/fyp/fyp-file';

@Component({
  selector: 'app-soutenance-files',
  templateUrl: './soutenance-files.component.html',
  styleUrls: ['./soutenance-files.component.css']
})
export class SoutenanceFilesComponent implements OnInit {
  students : User[] = [];
  fypFiles : FypFile[]=[];
  results : User[]= [];
  selectedResults : User[]= [];
  constructor(private _internshipDirectorService : InternshipDirectorService, private auth:AuthenticationService) { }
  ngOnInit() {
    this._internshipDirectorService.FYPFileWaitingForDefensePlan().subscribe(dataF=>{
      this._internshipDirectorService.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe(dataS=>{
        dataS.forEach(xx=>this.students.push(xx))
        dataF.forEach(x=>this.fypFiles.push(x))
        this.students.forEach(std=>{         
          this.fypFiles.forEach(file=>{
            if(std.fypFile.id===file.id)
            this.results.push(std);
           
          })
          this.selectedResults = this.results;
        })
      
      });
         
      });

      
  }
filter(input:string){
  this.selectedResults = [];
  this.results.forEach((element)=>{
    if(element.cin.includes(input) || element.firstName.toUpperCase().includes(input.toUpperCase())){
      this.selectedResults.push(element);
    }
  })
}


}
