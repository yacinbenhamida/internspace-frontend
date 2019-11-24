import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/security/authentication.service';
import { FypFileService } from '../services/fyp-file/fypfile.service';
import { FypFile } from '../models/fyp/fyp-file';

@Component({
  selector: 'app-fypfile-history',
  templateUrl: './fypfile-history.component.html',
  styleUrls: ['./fypfile-history.component.css']
})
export class FypfileHistoryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  fypFiles : FypFile[] = [];
  constructor(private authserv:AuthenticationService,
    private fyps:FypFileService) {

     }

  ngOnInit() {
    this.fyps.getFypFilesOfDepartment
    (this.authserv.currentUserValue.department.id)
    .subscribe((x:FypFile)=>{
      this.fypFiles.push(x)
    })
    this.dtOptions = {
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    }
  }
  someClickHandler(info: any): void {
    alert(info)
  }
}
