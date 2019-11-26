import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services/security/authentication.service';
import { FypFileService } from '../services/fyp-file/fypfile.service';
import { FypFile } from '../models/fyp/fyp-file';
import { FypFileHistoryService } from '../services/fyp-file/fypfile-history.service';
import { FypFileHistory } from '../models/fyp/fyp-file-history';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-fypfile-history',
  templateUrl: './fypfile-history.component.html',
  styleUrls: ['./fypfile-history.component.css']
})
export class FypfileHistoryComponent implements OnInit,OnDestroy {

  fypFilesOptions: DataTables.Settings = {};
  fypFiles : FypFile[] = [];
  history : FypFileHistory [] = [];
  fypFilesTriggers: Subject<FypFile> = new Subject();

  constructor(private authserv:AuthenticationService,
    private fyps:FypFileService,
    private fyphistory : FypFileHistoryService) {}
  ngOnInit() {
    this.fypFiles = [];
    this.fypFilesOptions = {  
      pagingType: 'full_numbers',
      pageLength: 2
    }
    this.fyps.getFypFilesOfDepartment(this.authserv.currentUserValue.department.id)
    .subscribe(x=>{
      this.fypFiles = x
      this.fypFilesTriggers.next()
      console.log(x)
        }
      )
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
