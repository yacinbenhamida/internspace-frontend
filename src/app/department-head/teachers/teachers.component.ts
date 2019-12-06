import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { TeacherServiceService } from 'src/app/services/Teacher/teacher-service.service';
import { UserService } from 'src/app/services/security/user.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { FypFileInterventionService } from 'src/app/services/fyp-file/fypfile-intervention.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachersList : User[] = []
  constructor(private teacherService:UserService,private auth:AuthenticationService,
    private fypIntv:FypFileInterventionService) { }

  ngOnInit() {
    this.loadTeachers()
    console.log(this.teachersList)
    
  }
  loadTeachers(){
    this.teacherService.getDepartmentTeachers(this.auth.currentUserValue.department.id)
    .subscribe(result=>{
      result.forEach(teacher => {
        this.fypIntv.getInterventionsOfTeacher(teacher.id).subscribe(
          intv =>{
            teacher.interventions = intv.filter( t=> t.teacherRole == "supervisor")
          }
        )
      });
      this.teachersList = result
      this.teachersList.sort((criteria1,criteria2) => {
        if(criteria1.interventions && criteria2.interventions){
          if(criteria1 > criteria2) return 1
          else if(criteria1 < criteria2) return -1
          else return 0
        }else  return 1
        
      })
    })
  }
  filterTeachers(event:any){
    console.log(event)
    if(event){
      this.teachersList = this.teachersList.filter(x=>x.username.includes(event) 
      || x.email.includes(event) ||x.lastName.includes(event) ||x.firstName.includes(event) ||
      x.username.toLowerCase().includes(event) || x.email.toLowerCase().includes(event)
       ||x.lastName.toLowerCase().includes(event) ||x.firstName.toLowerCase().includes(event))
    }
    else {
      this.loadTeachers()
      this.teachersList.sort((criteria1,criteria2) => {
        if(criteria1.interventions && criteria2.interventions){
          if(criteria1 > criteria2) return 1
          else if(criteria1 < criteria2) return -1
          else return 0
        }else  return 1
        
      })
    }
  }
}
