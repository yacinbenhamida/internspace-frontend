import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/exchanges/chat.service';
import { ActivatedRoute } from '@angular/router';
import { GoogleAuthService } from 'src/app/services/security/google-auth.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  userChats$;
  constructor(public auth: GoogleAuthService, public cs: ChatService) {}

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }
}
