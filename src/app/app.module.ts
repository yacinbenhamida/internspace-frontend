import { QuizModule } from './quiz/quiz.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/security/authguard.service';
import { AuthenticationService } from './services/security/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { FypTemplateModule } from './fyp-template/fyp-template.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FypCategorieComponent } from './fyp-categorie/fyp-categorie.component';
import { FypFileComponent } from './intership-director-module/fyp-file/fyp-file.component';
import { FypConventionComponent } from './fyp-convention/fyp-convention.component';
import { FypfileHistoryComponent } from './department-head/fypfile-history/fypfile-history.component';
import { DataTablesModule } from 'angular-datatables';
import { UniversityComponent } from './university/university.component';
import { SiteComponent } from './site/site.component';
import { DepartmentComponent } from './department/department.component';
import { FYPDefenseComponent } from './fypdefense/fypdefense.component';
import { DefenseCalendarComponent } from './defense-calendar/defense-calendar.component';
import { UniversityFormComponent } from './university-form/university-form.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { PerTypeSearchComponent } from './intership-director-module/components/per-type-search/per-type-search.component';
import { TabelComponent } from './intership-director-module/components/tabel/tabel.component';
import { StudentManagementComponent } from './intership-director-module/student-management/student-management.component';
import { FypfileHistoryCardComponent } from './department-head/fypfile-history/fypfile-history-card/fypfile-history-card.component';
import { NotificationsComponent } from './department-head/notifications/notifications.component';
import { NotificationElementComponent } from './department-head/notifications/notification-element/notification-element.component';
import { NoitificationsHistoryComponent } from './department-head/notifications/noitifications-history/noitifications-history.component';
import { FypConventionSComponent } from './Student/fyp-convention-s/fyp-convention-s.component';
import { IntershipCComponent } from './Student/intership-c/intership-c.component';
import { IntershipCreateComponent } from './Student/intership-create/intership-create.component';
import { TeacherFypfilesComponent } from './teacher-fypfiles/teacher-fypfiles.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FypFileByCategoryComponent } from './intership-director-module/fyp-file-by-category/fyp-file-by-category.component';
import { FypFileByYearComponent } from './intership-director-module/fyp-file-by-year/fyp-file-by-year.component';
import { FypFileByStateComponent } from './intership-director-module/fyp-file-by-state/fyp-file-by-state.component';
import { FypFileByCountryComponent } from './intership-director-module/fyp-file-by-country/fyp-file-by-country.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { AgmCoreModule } from '@agm/core';
import { IntershipUpdateComponent } from './Student/intership-update/intership-update.component';
import { FypPFECreateComponent } from './Student/fyp-pfecreate/fyp-pfecreate.component';
import { FypPFEUpdateComponent } from './Student/fyp-pfeupdate/fyp-pfeupdate.component';
import { FypfilesOperationsComponent } from './department-head/fypfiles-operations/fypfiles-operations.component';
import { LateStudentListComponent } from './intership-director-module/late-student-list/late-student-list.component';
import { FypFileManagementComponent } from './intership-director-module/fyp-file-management/fyp-file-management.component';
import { StudentProfileComponent } from './intership-director-module/student-profile/student-profile.component';
import { AccountManagementComponent } from './intership-director-module/account-management/account-management.component';
import { NotifierModule } from "angular-notifier";
import { FypFilesModificationComponent } from './fyp-files-modification/fyp-files-modification.component';
import { PFECategoryComponent } from './Student/pfecategory/pfecategory.component';
import { PFECategoryDetailsComponent } from './Student/pfecategory-details/pfecategory-details.component';
import { SuggestedCategoriesComponent } from './department-head/suggested-categories/suggested-categories.component';
import { MaxActionNumberOfTeacherPerDepartmentComponent } from './intership-director-module/max-action-number-of-teacher-per-department/max-action-number-of-teacher-per-department.component';
import { DepartmentProfileComponent } from './intership-director-module/department-profile/department-profile.component';
import { PayPalComponent } from './admin/pay-pal/pay-pal.component';
import { FypPfeUpdateComponent } from './Student/fyp-pfe-update/fyp-pfe-update.component';
import { FypPFEComponent } from './Student/Director/fyp-pfe/fyp-pfe.component';
import { FypfileEditActorsComponent } from './department-head/fypfile-edit-actors/fypfile-edit-actors.component';

import { ValidateReportDepoComponent } from './intership-director-module/validate-report-depo/validate-report-depo.component';
import { SoutenanceFilesComponent } from './intership-director-module/soutenance-files/soutenance-files.component';
import { FilesByDiffCritComponent } from './intership-director-module/files-by-diff-crit/files-by-diff-crit.component';




import { ReclamationComponent } from './Student/reclamation/reclamation.component';
import { FypFileDetailsComponent } from './Student/fyp-file-details/fyp-file-details.component';
import { AdminDepartmentsComponent } from './admin/admin-departments/admin-departments.component';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { FileUploadModule } from 'ng2-file-upload';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { TeachersComponent } from './department-head/teachers/teachers.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChatFormComponent } from './chat/chat-form/chat-form.component';
import { ChatroomComponent } from './chat/chatroom/chatroom.component';
import { environment } from 'src/environments/environment';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { MatSliderModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { TagInputModule } from 'ngx-chips';
import { SheetsManagementComponent } from './Student/Directeur/sheets-management/sheets-management.component';
import { AdminStudentsComponent } from './admin/admin-students/admin-students.component';
import { AdminEmployeesComponent } from './admin/admin-employees/admin-employees.component';
import { AdminClassesComponent } from './admin/admin-classes/admin-classes.component';
import { FavcategorieComponent } from './fy-categorie/favcategorie/favcategorie.component';
import { ProfileStudentComponent } from './Student/profile-student/profile-student.component';
import { SheetsModificationComponent } from './Student/Directeur/sheets-modification/sheets-modification.component';
import { ProfileStudentDetailComponent } from './Student/profile-student-detail/profile-student-detail.component';
import { InternshipsSearchComponent } from './internships-search/internships-search.component';


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
    UniversityComponent,
    SiteComponent,
    DepartmentComponent,
    FYPDefenseComponent,
    DefenseCalendarComponent,
    UniversityFormComponent,
    UploadFileComponent,
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
    FypfilesOperationsComponent,

    LateStudentListComponent,
    FypFileManagementComponent,
    StudentProfileComponent,
    AccountManagementComponent,
    FypFilesModificationComponent,
    PFECategoryComponent,
    PFECategoryDetailsComponent,
    SuggestedCategoriesComponent,
    PayPalComponent,
    FypPfeUpdateComponent,
    FypPFEComponent,
    MaxActionNumberOfTeacherPerDepartmentComponent,
    DepartmentProfileComponent,
    PayPalComponent,
    FypfileEditActorsComponent,

    ValidateReportDepoComponent,
    SoutenanceFilesComponent,
    FilesByDiffCritComponent,
    


    ReclamationComponent,
    FypFileDetailsComponent,
    AdminDepartmentsComponent,
    CalendarComponent,

    TeachersComponent,
    ChatFormComponent,
    ChatroomComponent,
    CompanyProfileComponent,
    SheetsManagementComponent,
    AdminStudentsComponent,
    AdminEmployeesComponent,
    AdminClassesComponent,
    FavcategorieComponent,
    ProfileStudentComponent,
    SheetsModificationComponent,
    ProfileStudentDetailComponent,
    InternshipsSearchComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAixiqoD1TaG9f3EQhGMKGZpZLIFVuUQYQ'
    }),
    NotifierModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FypTemplateModule,
    DashboardModule,
    DataTablesModule,
    FileUploadModule,
    CloudinaryModule.forRoot({ Cloudinary }, { cloud_name: 'dc9b3xgwe', upload_preset: 'jwihvh68' } as CloudinaryConfiguration),
    BrowserAnimationsModule,
    NgxPayPalModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })


 
  ],
  providers: [AppService,AuthGuard,AuthenticationService],
  bootstrap: [AppComponent],
  exports: [CalendarComponent,
    NgbModule,
    NgxContentLoadingModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatInputModule,
    TagInputModule,
    QuizModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ]
})
export class AppModule { }
