import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/security/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }

}
