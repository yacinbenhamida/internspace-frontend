import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { FypFile } from 'src/app/models/fyp/fyp-file';
import { Notification } from 'src/app/models/exchanges/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor(private http: HttpClient) { }

    getEmployeesNotifications(){
        return this.http.get("/api/notifications/")
        .pipe(
          map(res => res as Notification[] || [])
          );
    }



}
