import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AdminModule } from './admin/admin.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/security/authguard.service';
import { AuthenticationService } from './services/security/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { FypTemplateModule } from './fyp-template/fyp-template.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FypCategorieComponent } from './fyp-categorie/fyp-categorie.component';
import { FypFileComponent } from './intership-director-module/fyp-file/fyp-file.component';

import { FypConventionComponent } from './fyp-convention/fyp-convention.component';
import { FypfileHistoryComponent } from './fypfile-history/fypfile-history.component';
import { DataTablesModule } from 'angular-datatables';
import { FypfileHistoryCardComponent } from './fypfile-history/fypfile-history-card/fypfile-history-card.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationElementComponent } from './notifications/notification-element/notification-element.component';
import { NoitificationsHistoryComponent } from './notifications/noitifications-history/noitifications-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotfoundComponent,
    AuthenticationComponent,
    HomepageComponent,
    FooterComponent,
    FypCategorieComponent,
    ProfileComponent,
    FypFileComponent,
    FypConventionComponent,
    FypfileHistoryComponent,
    FypfileHistoryCardComponent,
    NotificationsComponent,
    NotificationElementComponent,
    NoitificationsHistoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    FypTemplateModule,
    DashboardModule,
    DataTablesModule
  ],
  providers: [AppService,AuthGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
