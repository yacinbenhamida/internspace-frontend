import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * a common app service class that manages the layout of the application
 * according to the setting, user roles and use cases
 */
export class AppService {
  navigation : boolean = false;
  footer : boolean = false;
  constructor() { }
  showNavbar(){
    this.navigation =  true;
  }
  showFooter(){
      this.footer = true;
  }
  hideNavbar(){
      this.navigation = false;
  }
  hideFooter(){
      this.footer = false;
  }

}
