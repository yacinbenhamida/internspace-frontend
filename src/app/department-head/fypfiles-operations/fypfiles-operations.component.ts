import { Component, OnInit, OnDestroy } from '@angular/core';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { Subject } from 'rxjs';
import { FypFileService } from 'src/app/services/fyp-file/fypfile.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

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

  constructor(private fypservice:FypFileService,
    private auth:AuthenticationService) { }

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
  }
  ngOnDestroy(){
    this.pendingSheetsTrigger.unsubscribe()
    this.acceptedSheetsTrigger.unsubscribe()
  }
  affectTeacher(id:number){

  }
  affectSupervisor(id:number){

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
