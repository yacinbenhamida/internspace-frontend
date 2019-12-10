import { Component, OnInit } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { User } from 'src/app/models/User';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-validate-report-depo',
  templateUrl: './validate-report-depo.component.html',
  styleUrls: ['./validate-report-depo.component.css']
})
export class ValidateReportDepoComponent implements OnInit {

  students : any[] = [];
  studentsR : any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();

  constructor(private _internShipDirector : InternshipDirectorService,private auth:AuthenticationService) { }
  ngOnInit() {
    
    this._internShipDirector.getAllStudents(this.auth.currentUserValue.department.site.university.id).subscribe((data)=>{
      data.forEach(elemet=>elemet.hasSubmittedAReport==false && elemet.isCreated==true?this.students.push({etat:false,elemet}):"") ;this.dtTrigger.next()})
   
      this.dtOptions = {
        searching: true,
        rowCallback: (row: Node, data: any | Object, index: number) => {
          const self = this;
          $('td', row).unbind('click');
          $('td', row).bind('click', () => {
            self.studentInfo(data);
          });
          return row;
        }      
    }
      
  }


  studentInfo = (data)=>{
    this._internShipDirector.ValidateReportSubmit(data.elemet.id).subscribe(data=>console.log(data));
    data.etat=true;

  }
}
