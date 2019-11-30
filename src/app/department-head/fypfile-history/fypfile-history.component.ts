import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../services/security/authentication.service';
import { FypFileService } from '../../services/fyp-file/fypfile.service';
import { FypFile } from '../../models/fyp/fyp-file';
import { FypFileHistoryService } from '../../services/fyp-file/fypfile-history.service';
import { FypFileHistory } from '../../models/fyp/fyp-file-history';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-fypfile-history',
  templateUrl: './fypfile-history.component.html',
  styleUrls: ['./fypfile-history.component.css']
})
export class FypfileHistoryComponent implements OnInit,OnDestroy {

  fypFiles : any[] =[]
  history : any [] = [];
  fypFilesTriggers: Subject<FypFile> = new Subject();
  fypFilesOptions: DataTables.Settings = {};
  constructor(private authserv:AuthenticationService,
    private fyps:FypFileService,
    private fyphistory : FypFileHistoryService) {
      this.fyps.getAcceptedFYPFiles(this.authserv.currentUserValue.department.id)
      .subscribe((val:FypFile[])=>{
          this.fypFiles = val
          this.fypFilesTriggers.next()
          console.log(this.fypFiles)
        },
        error=>console.log("oups, all fyp files service failed"))

    }
    

    
  ngOnInit() {
    this.fypFilesOptions = {  
      pagingType: 'full_numbers',
      pageLength: 2
    }
  
      }
      
    
  ngOnDestroy(): void {
    this.fypFilesTriggers.unsubscribe()
  }
  loadHistory(a:number){
    this.history = [];
      this.fyphistory.getHistoryOfFypFile(a)
      .subscribe((res : FypFileHistory[])=>{
        if(res.length>0){
          this.history = res
        }
        else alert("no changes were made to this sheet.")   
        return;
      })
  }

  
}
