import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { FypFileService } from 'src/app/services/fyp-file/fypfile.service';
import { FypFileHistoryService } from 'src/app/services/fyp-file/fypfile-history.service';
import { UserService } from 'src/app/services/security/user.service';
import Student from 'src/app/models/Student';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.css']
})
export class AdminStudentsComponent implements OnInit {
  students : any[] =[]
  history : any [] = [];
  fypFilesTriggers: Subject<FypFile> = new Subject();
  fypFilesOptions: DataTables.Settings = {};
  constructor(private authserv:AuthenticationService,
    private fyps:FypFileService,
    private fyphistory : FypFileHistoryService,
    private userServ : UserService,
    ) {
      this.userServ.getAllUsers()
      .subscribe((val:User[])=>{
          this.students = val
          this.fypFilesTriggers.next()
        }
    )
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
  allowStudent(s:User){
      this.userServ.allowStudent(s.id).subscribe(x=>{
        window.location.reload();},err=>{
          window.location.reload();
        })
      
  }
}
