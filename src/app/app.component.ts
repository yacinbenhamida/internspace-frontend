import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './services/security/authentication.service';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public appservice: AppService
    , private routes: ActivatedRoute
    , private router: Router,
    private auth:AuthenticationService) {}

  /**
   * we have to check if we are not dealing with the login page
   * so we can hide the navbar and footer of the application
   */
  ngOnInit() {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          if (this.router.url === '/login' || this.router.url === '/404' || 
           this.router.url.startsWith("/admin")) {
            this.appservice.hideFooter();
            this.appservice.hideNavbar();
          } else {
            this.appservice.showNavbar();
            this.appservice.showFooter();
          }

        }
      }
    );
  }

}
