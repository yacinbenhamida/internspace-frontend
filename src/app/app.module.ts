import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
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
import {PerTypeSearchComponent} from './intership-director-module/components/per-type-search/per-type-search.component';
import {TabelComponent} from './intership-director-module/components/tabel/tabel.component';
import { StudentManagementComponent } from './intership-director-module/student-management/student-management.component';
import { FypfileHistoryCardComponent } from './fypfile-history/fypfile-history-card/fypfile-history-card.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationElementComponent } from './notifications/notification-element/notification-element.component';
import { NoitificationsHistoryComponent } from './notifications/noitifications-history/noitifications-history.component';
import { FypConventionSComponent } from './Student/fyp-convention-s/fyp-convention-s.component';
import { IntershipCComponent } from './Student/intership-c/intership-c.component';
import { IntershipCreateComponent } from './Student/intership-create/intership-create.component';
import { TeacherFypfilesComponent } from './teacher-fypfiles/teacher-fypfiles.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FypFileByCategoryComponent } from './intership-director-module/fyp-file-by-category/fyp-file-by-category.component';
import { FypFileByYearComponent } from './intership-director-module/fyp-file-by-year/fyp-file-by-year.component';
import { FypFileByStateComponent } from './intership-director-module/fyp-file-by-state/fyp-file-by-state.component';
import { FypFileByCountryComponent } from './intership-director-module/fyp-file-by-country/fyp-file-by-country.component';

import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { IntershipUpdateComponent } from './Student/intership-update/intership-update.component';
import { FypPFECreateComponent } from './Student/fyp-pfecreate/fyp-pfecreate.component';
import { FypPFEUpdateComponent } from './Student/fyp-pfeupdate/fyp-pfeupdate.component';




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
    PerTypeSearchComponent,
    TabelComponent,
    StudentManagementComponent,
    FypfileHistoryCardComponent,
    NotificationsComponent,
    NotificationElementComponent,
    NoitificationsHistoryComponent,
    FypConventionSComponent,
    IntershipCComponent,
    IntershipCreateComponent,
    TeacherFypfilesComponent,
    FypFileByCategoryComponent,
    FypFileByYearComponent,
    FypFileByStateComponent,
    FypFileByCountryComponent,
    AdminHeaderComponent,
    AdminHomepageComponent,
    IntershipUpdateComponent,
    FypPFECreateComponent,
    FypPFEUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FypTemplateModule,
    DashboardModule,
    DataTablesModule,
    BrowserAnimationsModule,

 
  ],
  providers: [AppService,AuthGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
