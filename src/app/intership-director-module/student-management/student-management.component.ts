import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/security/authentication.service';


@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  students : User[];

  connectedUser : any;
  dtTrigger: Subject<User>= new Subject();
 
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
      this._internShipDirector.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe((data)=>{console.log(data);this.students=data;this.dtTrigger.next() })
        
     this.connectedUser =localStorage.getItem('user');
     console.log(this.auth.currentUserValue)
     this._internShipDirector.DepartementList(this.auth.currentUserValue.department.site.university.id.toString()).subscribe((data)=>console.log(data))
  }

 
    


  studentInfo = (data)=>{
    console.log(data[0])
  }
}

