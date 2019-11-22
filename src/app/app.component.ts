import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public appservice: AppService
    , private routes: ActivatedRoute
    , private router: Router) {}

  /**
   * we have to check if we are not dealing with the login page
   * so we can hide the navbar and footer of the application
   */
  ngOnInit() {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          console.log(this.router.url);

          if (this.router.url === '/login') {
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
