import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationService } from 'src/app/services/exchanges/notifications.service';
import { Notification } from 'src/app/models/exchanges/notification';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
@Component({
  selector: 'app-noitifications-history',
  templateUrl: './noitifications-history.component.html',
  styleUrls: ['./noitifications-history.component.css']
})
export class NoitificationsHistoryComponent implements OnInit,OnDestroy {
 
  employeesOptions: DataTables.Settings = {};
  employeesTriggers: Subject<Notification> = new Subject();
  employeesNotifications : Notification[] = []

  studentsOptions: DataTables.Settings = {};
  studentsTriggers: Subject<Notification> = new Subject();
  studentsNotifications : Notification[] = []
  constructor(private auth:AuthenticationService
    ,private notifService:NotificationService) { }

  ngOnInit() {
    this.employeesOptions = {  
      pagingType: 'full_numbers',
      pageLength: 5
    }
     this.studentsOptions = {  
      pagingType: 'full_numbers',
      pageLength: 5
    }
    this.notifService.getEmployeesNotifications()
    .subscribe(x=>{
      this.employeesNotifications = x.filter(a=>a.reciever.userType=='employee' && a.reciever.department == this.auth.currentUserValue.department)
      this.studentsNotifications = x.filter(a=>a.reciever.userType=='student' && a.reciever.department == this.auth.currentUserValue.department)
      this.employeesTriggers.next()
      this.studentsTriggers.next()
    })
    
  }
  ngOnDestroy() {
    this.employeesTriggers.unsubscribe()
    this.studentsTriggers.unsubscribe()
  }

}
