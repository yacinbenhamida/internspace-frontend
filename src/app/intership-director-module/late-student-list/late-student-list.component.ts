import { Component, OnInit } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-late-student-list',
  templateUrl: './late-student-list.component.html',
  styleUrls: ['./late-student-list.component.css']
})
export class LateStudentListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  students : User[];
  textInput;
  connectedUser : any;
  dtTrigger: Subject<User>= new Subject();
  state=true;
 
  constructor(private _internShipDirector : InternshipDirectorService,private auth:AuthenticationService) { }


  ngOnInit() {
    

        this.dtOptions = {
          rowCallback: (row: Node, data: any | Object, index: number) => {
            const self = this;
            $('td', row).unbind('click');
            $('td', row).bind('click', () => {
              self.studentInfo(data);
            });
            return row;
          }      
      }
      this._internShipDirector.ListLateStudents(new Date().getFullYear().toString(),this.auth.currentUserValue.department.site.university.id.toString()).subscribe((data)=>{console.log(data);this.students=data;this.dtTrigger.next() })
        
     this.connectedUser =this.auth.currentUserValue
     //this._internShipDirector.DepartementList(this.auth.currentUserValue.department.site.university.id.toString()).subscribe((data)=>console.log(data))
  }
  studentInfo = (data)=>{
    
  }
  sendEmail =()=>{
  this._internShipDirector.sendMail(new Date().getFullYear().toString(),this.textInput,this.auth.currentUserValue.department.site.university.id.toString()).subscribe(data=>console.log("done"))

}

}
