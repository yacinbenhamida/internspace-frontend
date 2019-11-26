import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  students : User[];
  studentLS : User[];
  dtTrigger: Subject = new Subject();
  constructor(private _internShipDirector : InternshipDirectorService) { }
  ngOnInit() {
   
        
        this.dtOptions = {
          rowCallback: (row: Node, data: any[] | Object, index: number) => {
            const self = this;
            $('td', row).unbind('click');
            $('td', row).bind('click', () => {
              self.studentInfo(data);
            });
            return row;
          }
        
      }
      this._internShipDirector.getAllStudents().subscribe((data)=>{console.log(data);this.students=data;this.dtTrigger.next();})
        this.studentLS=this.students;
  }

  studentInfo = (data)=>{
    console.log("haha")
  }
}
