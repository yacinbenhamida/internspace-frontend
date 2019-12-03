import { Component, OnInit } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-fyp-file-management',
  templateUrl: './fyp-file-management.component.html',
  styleUrls: ['./fyp-file-management.component.css']
})
export class FypFileManagementComponent implements OnInit {
  allFYPFiles:FypFile[]=[];
  annuledFiles:FypFile[]=[];
  allStudents:User[]=[];
  companyLinks:string[]=[];
  stateH=true;
  stateA=true;
  textAnnulation:string;
  textRefuse:string;
  chosedFYP:FypFile;
  empty:boolean=true;
  constructor(private _internshipDirectorService : InternshipDirectorService, private auth:AuthenticationService) { }


  ngOnInit() {
    this._internshipDirectorService.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe(data=>{this.allStudents=data,this.allStudents.map(
      x=>{
        if(x.fypFile.fileStatus==="pending")
        this.allFYPFiles.push(x.fypFile);
      })
    });

    this._internshipDirectorService.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe(data=>{this.allStudents=data,this.allStudents.map(
      x=>{
        if(x.fypFile.isCanceled==true && x.fypFile.isArchived==false)
        this.annuledFiles.push(x.fypFile);
      })
    });
  }


  checkAction =(data:FypFile)=>{
    this.chosedFYP=data;
    console.log(this.chosedFYP);
    
    
  this._internshipDirectorService.LinksOfChoosenCompany(data.subject.company.id).subscribe(data=>{this.companyLinks=data,console.log(this.companyLinks)});
  }

  OpenLinks =(link)=>{
    window.open(link.slice(2, link.length-2), '_blank');
  }

  confrimFile =()=>{
   this._internshipDirectorService.AcceptFYPFile(this.chosedFYP.id.toString()).subscribe(data=>window.location.reload(true))
  }
  RefuseFile =()=>{
    this._internshipDirectorService.RefuseFYPFile(this.chosedFYP.id.toString(),this.textRefuse).subscribe(data=>window.location.reload(true))
   }
  pendingFiles =()=>{
    this.stateH=false;
    this.stateA=true;

  }

  /***********************************************************/
  annuledlist =()=>{
    this.stateA=false;
    this.stateH=true;
  }

  clickedOne=(data)=>{
    this.chosedFYP=data;
    console.log(this.chosedFYP)
  }

  acceptAnnulation =() =>{
    this._internshipDirectorService.AcceptFYPFileCancellingDemande(this.chosedFYP.id.toString()).subscribe(data=>window.location.reload(true))
    
  }
  refuseAnnulation =() =>{
    this._internshipDirectorService.DeclineFYPFileCancellingDemande(this.chosedFYP.id.toString(),this.textAnnulation).subscribe(data=>window.location.reload(true))

  }

  verif=(x)=>{
    if(x.length>=15)
        this.empty=false;
        else
        this.empty=true;
  }


}
