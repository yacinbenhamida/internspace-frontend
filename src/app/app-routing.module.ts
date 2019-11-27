import { UniversityStatsComponent } from './dashboard/university-stats/university-stats.component';
import { FypTemplateManagementComponent } from './fyp-template/fyp-template-management/fyp-template-management.component';
import { FypConventionComponent } from './fyp-convention/fyp-convention.component';
import { FypConventionSComponent } from './student/fyp-convention-s/fyp-convention-s.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './admin/settings/settings.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/security/authguard.service';
import { FypCategorieComponent } from './fyp-categorie/fyp-categorie.component';
import { FypFileComponent } from './intership-director-module/fyp-file/fyp-file.component';
import { FypfileHistoryComponent } from './fypfile-history/fypfile-history.component';
import { StudentManagementComponent } from './intership-director-module/student-management/student-management.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NoitificationsHistoryComponent } from './notifications/noitifications-history/noitifications-history.component';
import { IntershipCComponent } from './Student/intership-c/intership-c.component';
import { IntershipCreateComponent } from './Student/intership-create/intership-create.component';
import { FypFileByCategoryComponent } from './intership-director-module/fyp-file-by-category/fyp-file-by-category.component';
import { FypFileByYearComponent } from './intership-director-module/fyp-file-by-year/fyp-file-by-year.component';
import { FypFileByStateComponent } from './intership-director-module/fyp-file-by-state/fyp-file-by-state.component';
import { FypFileByCountryComponent } from './intership-director-module/fyp-file-by-country/fyp-file-by-country.component';


const routes: Routes = [
  {path : '', component : HomepageComponent},
  {path : 'admin', component : SettingsComponent},
  {path : 'login', component : AuthenticationComponent},
  {path: 'fypTemplate', component: FypTemplateManagementComponent},
  {path: 'fypConvention', component: FypConventionComponent},

  {path: 'student/inter', component: IntershipCComponent},
  {path: 'create', component:  IntershipCreateComponent},
  {path: 'update/:id', component: FypConventionComponent},
  {path: 'profile', component: ProfileComponent, canActivate : [AuthGuard]},
  {path: 'uniDash', component: UniversityStatsComponent},
  { path: 'create-category', component: FypCategorieComponent },
  {path: 'internshipDirector', component: FypFileComponent},
  {path : 'fypfile/history', component : FypfileHistoryComponent},
  {path: 'internshipDirector/studentManagement', component: StudentManagementComponent},
  {path : 'notifications/history', component : NoitificationsHistoryComponent},
  {path : 'fypFileBycategory', component : FypFileByCategoryComponent},
  {path : 'fypFileByYear', component : FypFileByYearComponent},
  {path : 'fypFileByState', component : FypFileByStateComponent},
  {path : 'fypFileByCountry', component : FypFileByCountryComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
