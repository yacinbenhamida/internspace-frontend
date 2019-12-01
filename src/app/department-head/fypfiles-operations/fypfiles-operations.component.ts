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
  teacherTargetedRole : string 
  selectedFile : FypFile;
  preloadedIntervention : any[] = []
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
      pageLength: 4
    }
    this.pendingSheetsOptions = {  
      pagingType: 'full_numbers',
      pageLength: 4
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
  affectTeacher(file:FypFile){
    this.selectedFile = file
  }
  affectSupervisor(file:FypFile){
    this.selectedFile = file
  }

  roleVerification(val:any){
    this.preloadedIntervention = []
    if(val){
      if(this.selectedFile){
        this.interventionService.getInterventionsOfSheet(this.selectedFile.id)
        .subscribe(intv=>{
          this.preloadedIntervention = intv
        if(this.preloadedIntervention.length > 0){
          if(val == "supervisor" && (
          this.collectTeacherWithRole("supervisor",this.preloadedIntervention) == null
          || this.collectTeacherWithRole("supervisor",this.preloadedIntervention).length == 0)){
            this.informations = true
            this.teacherTargetedRole = "supervisor"
          }
          else if(val == "preValidator" 
          && (
            this.collectTeacherWithRole("preValidator",this.preloadedIntervention) == null
            || this.collectTeacherWithRole("preValidator",this.preloadedIntervention).length == 0)){
            this.informations = true
            this.teacherTargetedRole = "preValidator"
          }
          else if(val == "reporter" 
          && (
            this.collectTeacherWithRole("reporter",this.preloadedIntervention) == null
            || this.collectTeacherWithRole("reporter",this.preloadedIntervention).length == 0)){
            this.informations = true
            this.teacherTargetedRole = "reporter"
          }
          else if(val == "juryPresident" 
          && (
            this.collectTeacherWithRole("juryPresident",this.preloadedIntervention) == null
            || this.collectTeacherWithRole("juryPresident",this.preloadedIntervention).length == 0)){
            this.informations = true
            this.teacherTargetedRole = "juryPresident"
          }else{
            this.informations = false
          }  
        }else {
          this.informations = true
        }
        })    
      }
    }else this.informations = false
  }

  collectTeacherWithRole(role:string,tab:FypIntervention[]) : FypIntervention[]{
    return role && tab ? tab.filter(val=>val.teacherRole == role) : null
  }

  loadNoOfActions(){
    if(this.teachertoBeAssigned && this.selectedFile){
        if(this.teacherTargetedRole =="supervisor"){
          return this.auth.currentUserValue.department.numberOfActionsAllowedForSupervisors
        }
        else if(this.teacherTargetedRole =="preValidator"){
          return this.auth.currentUserValue.department.numberOfActionsAllowedForPreValidators
        }
        else if(this.teacherTargetedRole =="reporter"){
          return this.auth.currentUserValue.department.numberOfActionsAllowedForProtractors
        }
        else if(this.teacherTargetedRole =="juryPresident"){
          return this.auth.currentUserValue.department.numberOfActionsAllowedForPresidents
        }
    }
    return 0
  }
  cancelTeacherAssign(){
    this.teachertoBeAssigned = new User()
    this.teacherTargetedRole = null
    this.preloadedIntervention = []
    this.selectedFile = null
    this.informations = false
  }
  confirmTeacherAssign(){
    if(this.teacherTargetedRole && this.teachertoBeAssigned){
        this.interventionService.
        assignTeacherToFYPSheetWithRole(this.teachertoBeAssigned.id,this.selectedFile,this.teacherTargetedRole)
        .subscribe(res=>{ 
          alert("teacher assigned to this sheet")
          this.cancelTeacherAssign()
        })
    }
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
