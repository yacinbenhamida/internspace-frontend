import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Subject } from 'rxjs';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { element } from 'protractor';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  students : User[]=[];
 chosedStudent : User = new User();

  connectedUser : any;
  dtTrigger: Subject<User>= new Subject();
 
  constructor(private _internShipDirector : InternshipDirectorService,private auth:AuthenticationService) { }


  ngOnInit() {

        this.dtOptions = {
          rowCallback: (row: Node, data: any | Object, index: number) => {
            const self = this;
            $('td', row).unbind('click');
            $('td', row).bind('click', () => {
              this.chosedStudent=data;
              self.studentInfo(index);
            });
            return row;
          }      
      }
      this._internShipDirector.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe((data)=>{console.log(data);
        data.forEach(element=>{
          if(element.isDisabled===false)
          this.students.push(element);
        });
        this.dtTrigger.next() })
        
     this.connectedUser =this.auth.currentUserValue
  }
  studentInfo = (index)=>{
   this.chosedStudent=this.students[index];
  }

  disableAcount =()=>{
    this._internShipDirector.DisableStudentAccount(this.chosedStudent.id.toString()).subscribe(data=>console.log("done"));
  }
}
