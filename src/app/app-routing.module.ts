import { UniversityStatsComponent } from './dashboard/university-stats/university-stats.component';
import { FypTemplateManagementComponent } from './fyp-template/fyp-template-management/fyp-template-management.component';
import { FypConventionComponent } from './fyp-convention/fyp-convention.component';
import { FypConventionSComponent } from './student/fyp-convention-s/fyp-convention-s.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';


/**
 * for admin & superAdmin routes please register them below with the prefix 
 * /admin/* to insure the use of the second header layout
 */

const routes: Routes = [
  {path : '', component : HomepageComponent},
  // start of administration components
  {path : 'admin', component : AdminHomepageComponent, canActivate : [AuthGuard]},
  // end administration components
  // start of login,profiles  and registration
  {path : 'login', component : AuthenticationComponent},
  {path: 'profile', component: ProfileComponent, canActivate : [AuthGuard]},
  // end login and registration
  {path: 'fypTemplate', component: FypTemplateManagementComponent},
  {path: 'fypConvention', component: FypConventionComponent},
  {path: 'student/inter', component: IntershipCComponent},
  {path: 'create', component:  IntershipCreateComponent},
  {path: 'update/:id', component: FypConventionComponent},
  {path: 'uniDash', component: UniversityStatsComponent},
  { path: 'create-category', component: FypCategorieComponent },
  {path: 'internshipDirector', component: FypFileComponent},
  {path : 'fypfile/history', component : FypfileHistoryComponent, canActivate : [AuthGuard]},
  {path: 'internshipDirector/studentManagement', component: StudentManagementComponent},
  {path : 'notifications/history', component : NoitificationsHistoryComponent, canActivate : [AuthGuard]},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
