import { Component, OnInit, OnDestroy } from '@angular/core';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { Subject } from 'rxjs';
import { FypFileService } from 'src/app/services/fyp-file/fypfile.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { User } from 'src/app/models/User';
import { FypFileInterventionService } from 'src/app/services/fyp-file/fypfile-intervention.service';
import { FypIntervention } from 'src/app/models/fyp/fyp-intervention';
import { UserService } from 'src/app/services/security/user.service';

@Component({
  selector: 'app-fypfiles-operations',
  templateUrl: './fypfiles-operations.component.html',
  styleUrls: ['./fypfiles-operations.component.css']
})
export class FypfilesOperationsComponent implements OnInit,OnDestroy {
  acceptedSheetsOptions: DataTables.Settings = {};
  acceptedSheetsTrigger: Subject<FypFile> = new Subject();
  acceptedSheets : any[] = []
  pendingSheetsOptions: DataTables.Settings = {};
  pendingSheetsTrigger: Subject<FypFile> = new Subject();
  pendingSheets : any[] = []
  // dialog related stuff
  teachertoBeAssigned : User;
  selectedFile : FypFile;
  preloadedIntervention : any
  // show details of affectation
  informations : boolean = false;
  teachersList:any [] = []

  //teacher assigning not yet done...
  constructor(private fypservice:FypFileService,
    private auth:AuthenticationService,private interventionService:FypFileInterventionService,
    private userv:UserService) { }

  ngOnInit() {
    this.acceptedSheetsOptions = {  
      pagingType: 'full_numbers',
      pageLength: 2
    }
    this.pendingSheetsOptions = {  
      pagingType: 'full_numbers',
      pageLength: 2
    }
    this.fypservice.getAcceptedFYPFiles(this.auth.currentUserValue.department.id).subscribe((file:FypFile[])=>{
      this.acceptedSheets = file
      this.acceptedSheetsTrigger.next()
    })
    this.fypservice.getPendingFYPFiles(this.auth.currentUserValue.department.id).subscribe(file=>{
      this.pendingSheets = file
      this.pendingSheetsTrigger.next()
    })
    this.userv.getDepartmentTeachers(this.auth.currentUserValue.department.id)
    .subscribe(teacher=>this.teachersList = teacher)

  }
  ngOnDestroy(){
    this.pendingSheetsTrigger.unsubscribe()
    this.acceptedSheetsTrigger.unsubscribe()
  }
  affectTeacher(file:any){
    this.selectedFile = file
  }
  affectSupervisor(file:any){
    this.selectedFile = file
  }

  roleVerification(val:any){
    if(val){
      if(this.selectedFile){
        this.interventionService.getInterventionsOfSheet(this.selectedFile.id)
        .subscribe(intv=>{
          this.preloadedIntervention = intv
        })
        console.log(this.preloadedIntervention)
          if(val == "Supervision" && this.collectTeacherWithRole("supervisor",this.preloadedIntervention) != null){
            this.informations = false
          }
          else if(val == "Pre validation" && this.collectTeacherWithRole("preValidator",this.preloadedIntervention ) != null){
            this.informations = false
          }
          else if(val == "Reporting" && this.collectTeacherWithRole("reporter",this.preloadedIntervention) != null){
            this.informations = false
          }
          else if(val == "Jury President" && this.collectTeacherWithRole("juryPresident",this.preloadedIntervention) != null){
            this.informations = false
          }else{
            this.informations = true
          }      
      }
    }
  }

  collectTeacherWithRole(role:string,tab:FypIntervention[]){
    return role!="" && tab ? tab.filter(val=>val.teacherRole == role) : null
  }
  determineAdvancement(input:FypFile,type:string){
    let width : number = 0
    if(input){
      if(input.isPrevalidated) width = 50
      if(input.isConfirmed) width = 75
      if(input.finalMark > 0) width = 100
      if(input.isConfirmed || input.fileStatus == "confirmed") width = 25
      else width = 100
      switch (type) {
        case "css":{
          return "width : "+width+"%;";break;
        }
        case "int":{
          return width;break;
        }
  
      }
    }
  }

  parseState(input:FypFile){
      if(input.isPrevalidated) return "pre-validated"
      if(input.isConfirmed) return "confirmed"
      if(input.finalMark > 0) return "completed"
      if(input.isConfirmed || input.fileStatus == "confirmed") return "confirmed"
      else return "archieved"
  }

}
