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
import { IntershipCComponent } from './Student/intership-c/intership-c.component';

const routes: Routes = [
  {path : '', component : HomepageComponent},
  {path : 'admin', component : SettingsComponent},
  {path : 'login', component : AuthenticationComponent},
  {path: 'fypTemplate', component: FypTemplateManagementComponent},
  {path: 'fypConvention', component: FypConventionComponent},

  {path: 'student/inter', component: IntershipCComponent},
  {path: 'update/:id', component: FypConventionComponent},
  {path: 'profile', component: ProfileComponent, canActivate : [AuthGuard]},
  {path: 'uniDash', component: UniversityStatsComponent},
  { path: 'create-category', component: FypCategorieComponent },
  {path: 'internshipDirector', component: FypFileComponent},
  {path : 'fypfile/history', component : FypfileHistoryComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
