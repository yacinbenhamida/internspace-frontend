import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Notification } from 'src/app/models/exchanges/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor(private http: HttpClient) { }

    getEmployeesNotifications() : Observable<Notification []>{
        return this.http.get<Notification[]>("/api/notifications/")
    }
    saveNotification(n:Notification){
      return this.http.get<Notification>("/api/notifications/add/"+n.sender.id+"/"+n.reciever.id+"/"+n.content);
    }
    notificationsOfUser(uid:number){
      return this.http.get<Notification[]>("/api/notifications/history/"+uid);
    }


}
