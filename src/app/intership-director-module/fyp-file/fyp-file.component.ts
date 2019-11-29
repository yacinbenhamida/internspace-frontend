import { Component, OnInit } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { FypFile } from 'src/app/models/fyp/fyp-file';

@Component({
  selector: 'app-fyp-file',
  templateUrl: './fyp-file.component.html',
  styleUrls: ['./fyp-file.component.css']
})
export class FypFileComponent implements OnInit {

  constructor(private _internshipDirectorService : InternshipDirectorService) { }

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
  this._internshipDirectorService.getAllFypFile().subscribe(data=>{this.allFYPFiles=data,console.log(data)})
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
}

allFYPFiles:FypFile[];


CritHandler = (TargetElement:HTMLElement)=>{
  TargetElement.scrollIntoView();
}
}
