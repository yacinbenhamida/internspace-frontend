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

    getEmployeesNotifications() : Observable<Notification []>{
        return this.http.get<Notification[]>("/api/notifications/")
    }



}
