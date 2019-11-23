import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AdminModule } from './admin/admin.module';
import { FypTemplateModule } from './fyp-template/fyp-template.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/security/authguard.service';
import { AuthenticationService } from './services/security/authentication.service';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotfoundComponent,
    AuthenticationComponent,
    HomepageComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    FypTemplateModule
  ],
  providers: [AppService,AuthGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
