import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  
  constructor(private auth:AuthenticationService,
    private router:Router) { }

  ngOnInit() {
  }
  logoutAction(){
    this.auth.logout()
    this.router.navigateByUrl("/login")
  }
}
