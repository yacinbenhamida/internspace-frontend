import { Component, OnInit } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import Student from 'src/app/models/Student';
import { User } from 'src/app/models/User';
import { element } from 'protractor';

@Component({
  selector: 'app-fyp-file',
  templateUrl: './fyp-file.component.html',
  styleUrls: ['./fyp-file.component.css']
})
export class FypFileComponent implements OnInit {
  allFYPFiles:FypFile[]=[];
  allStudents:User[]=[];
  selectedUser :User= new User();
  myRes:any[]=[];
  constructor(private _internshipDirectorService : InternshipDirectorService, private auth:AuthenticationService) { }

  ngOnInit() {

    
 // this._internshipDirectorService.getCurrentFYPFileList().subscribe(data=>console.log(data));
  //this._internshipDirectorService.getFileWithAnnulationDemande().subscribe(data=>console.log(data));
  //this._internshipDirectorService.getAllStudents().subscribe(data=>console.log(data));
  //this._internshipDirectorService.findStudentByCIN("07477865").subscribe(data=>console.log(data))
  //this._internshipDirectorService.FYPFileWaitingForDefensePlanByCIN("10101010").subscribe(data=>console.log(data))
  //this._internshipDirectorService.ArchivedFiles().subscribe(data=>console.log(data))
  //this._internshipDirectorService.FullStudentInfo().subscribe(data=>console.log(data))
 // this._internshipDirectorService.FypFileByCountry("Tunisia").subscribe(data=>console.log(data))
  //this._internshipDirectorService.ListLateStudents("2018").subscribe(data=>console.log(data))
  this._internshipDirectorService.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe(data=>{this.allStudents=data,this.allStudents.map(
    x=>{
      if(x.isCreated){
      this.allFYPFiles.push(x.fypFile)
      console.log(x);
    }
      
    })
    this.allFYPFiles.forEach(element => {

      if(element.fileStatus==="confirmed")
      {
        this._internshipDirectorService.CompanyCordinates(element.subject.company.id.toString()).subscribe(data=>{this.myRes.push({fyp:element,cords:data})})

      }
     
     
    });
  
  })

  
  //this._internshipDirectorService.FypFileByState("pending").subscribe(data=>console.log(data))
  //this._internshipDirectorService.FypFileByYear("2017").subscribe(data=>console.log(data))
  //this._internshipDirectorService.FypFileByCategory("Research").subscribe(data=>console.log(data))
  //this._internshipDirectorService.FypFileByDiffSpecfique("","confirmed","2019","Tunisia").subscribe(data=>console.log(data))
  //this._internshipDirectorService.AnnulationFYPFileDemandeList().subscribe(data=>console.log(data))
  /*this._internshipDirectorService.DeclineFYPFileCancellingDemande("3","helloangular").subscribe(data =>{
    console.log(data);
  });*/
  //this._internshipDirectorService.AcceptFYPFileCancellingDemande("3").subscribe();
  //this._internshipDirectorService.AnnulationFYPFileDemandeList().subscribe(data=>console.log(data));
    //this._internshipDirectorService.AcceptFYPFile("1").subscribe(data=>console.log(data));
    //this._internshipDirectorService.RefuseFYPFile("4","text email ").subscribe(data=>console.log(data));
    //this._internshipDirectorService.DisableStudentAccount("1").subscribe(data=>console.log(data));

    //this._internshipDirectorService.ValidateReportSubmit("1").subscribe(data=>console.log(data));
    //this._internshipDirectorService.FYPFileWaitingForDefensePlan().subscribe(data=>console.log(data));
    
   // this._internshipDirectorService.FilterFYPFileWaitingForDefensePlan("","1112").subscribe(data=>console.log(data));
  //this._internshipDirectorService.FixNumberAsSupervisor("1","1").subscribe(data=>console.log(data));
  //this._internshipDirectorService.PendingFYPFile().subscribe(data=>console.log(data));
    //this._internshipDirectorService.LinksOfChoosenCompany("55").subscribe(data=>console.log(data));
    
   console.log(this.myRes)
}


CritHandler = (TargetElement:HTMLElement)=>{
  TargetElement.scrollIntoView();
}

centerLat=34.7355714;
canterLng=7.1560112;

onClickInfoView =(xx)=>{
console.log(xx);
}

infoWindowOpened = null
previous_info_window = null

close_window(){
if (this.previous_info_window != null ) {
  this.previous_info_window.close()
  }    
}

select_marker(data,infoWindow){
 if (this.previous_info_window == null)
  this.previous_info_window = infoWindow;
 else{
  this.infoWindowOpened = infoWindow
  this.previous_info_window.close()
 }
 this.previous_info_window = infoWindow
}
openWindow =(xx,data,infoWindow)=>{
this.allStudents.forEach(element=>{
  this.select_marker(data,infoWindow)
  if(xx.fyp==element.fypFile)
  this.selectedUser = element;
})
}
}


