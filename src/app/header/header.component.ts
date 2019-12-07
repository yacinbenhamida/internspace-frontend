import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/security/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthenticationService,
    private router:Router) { }

  ngOnInit() {
  }

  logoutAction(){
    this.auth.logout();
    this.router.navigateByUrl("/login")
  }

}
