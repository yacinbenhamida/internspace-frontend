import { UniversityStatsComponent } from './dashboard/university-stats/university-stats.component';
import { FypTemplateManagementComponent } from './fyp-template/fyp-template-management/fyp-template-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './admin/settings/settings.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/security/authguard.service';
import { FypFileComponent } from './intership-director-module/fyp-file/fyp-file.component';

const routes: Routes = [
  {path : '', component : HomepageComponent},
  {path : 'admin', component : SettingsComponent},
  {path : 'login', component : AuthenticationComponent},
  {path: 'fypTemplate', component: FypTemplateManagementComponent},
  {path: 'profile', component: ProfileComponent, canActivate : [AuthGuard]},
  {path: '404', component: NotfoundComponent},
  {path: 'uniDash', component: UniversityStatsComponent},
  {path: 'internshipDirector', component: FypFileComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
