import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/exchanges/chat.service';
import { ActivatedRoute } from '@angular/router';
import { GoogleAuthService } from 'src/app/services/security/google-auth.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  userChats$;
  constructor(public authServ:AuthenticationService,public auth: GoogleAuthService, public cs: ChatService) {}

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }
  createNewChatRoom(title:string){
    if(title) this.cs.create(title,this.authServ.currentUserValue.username);
    else alert("don't forget the title !")
  }
}
