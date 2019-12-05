import { Component, OnInit, Input } from '@angular/core';
import { TeacherServiceService } from 'src/app/services/Teacher/teacher-service.service';
import { TeacherFypfilesComponent } from 'src/app/teacher-fypfiles/teacher-fypfiles.component';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit {


  @Input() tab;
  @Input() hid=true;
  hide=true;
  restA:TeacherServiceService;
  
  constructor( restA: TeacherServiceService, 
    
 ) {this.restA=restA;}
  Prevalidate(x:number)
  {
    console.log(x);
    this.restA.PrevalidateFypFile(x);

  }
  ngOnInit() {
    this.hide=this.hid;
  }

}
