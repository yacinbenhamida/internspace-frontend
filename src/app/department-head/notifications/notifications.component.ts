import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { NotificationService } from 'src/app/services/exchanges/notifications.service';
import { Notification } from 'src/app/models/exchanges/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notificationList : Notification [] = []
  
  constructor(private nserv:NotificationService,
    private auth:AuthenticationService) { }

  ngOnInit() {
    this.nserv.notificationsOfUser(this.auth.currentUserValue.id).subscribe(n=>{
      this.notificationList = n
      console.log(n)
    })
  }

}
