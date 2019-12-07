import { AuthenticationService } from './../services/security/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }

}
