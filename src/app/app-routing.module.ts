import { CompanyProfileComponent } from './company-profile/company-profile.component';
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
import { UniversityComponent } from './university/university.component';
import { SiteComponent } from './site/site.component';
import { FYPDefenseComponent } from './fypdefense/fypdefense.component';
import { DefenseCalendarComponent } from './defense-calendar/defense-calendar.component';
import { UniversityFormComponent } from './university-form/university-form.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FypfileHistoryComponent } from './department-head/fypfile-history/fypfile-history.component';
import { StudentManagementComponent } from './intership-director-module/student-management/student-management.component';
import { NotificationsComponent } from './department-head/notifications/notifications.component';
import { NoitificationsHistoryComponent } from './department-head/notifications/noitifications-history/noitifications-history.component';
import { IntershipCComponent } from './Student/intership-c/intership-c.component';
import { IntershipCreateComponent } from './Student/intership-create/intership-create.component';

import { FypFileByCategoryComponent } from './intership-director-module/fyp-file-by-category/fyp-file-by-category.component';
import { FypFileByYearComponent } from './intership-director-module/fyp-file-by-year/fyp-file-by-year.component';
import { FypFileByStateComponent } from './intership-director-module/fyp-file-by-state/fyp-file-by-state.component';
import { FypFileByCountryComponent } from './intership-director-module/fyp-file-by-country/fyp-file-by-country.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { TeacherFypfilesComponent } from './teacher-fypfiles/teacher-fypfiles.component';
import { FypPFECreateComponent } from './Student/fyp-pfecreate/fyp-pfecreate.component';
import { FypfilesOperationsComponent } from './department-head/fypfiles-operations/fypfiles-operations.component';
import { LateStudentListComponent } from './intership-director-module/late-student-list/late-student-list.component';
import { FypFileManagementComponent } from './intership-director-module/fyp-file-management/fyp-file-management.component';

import { StudentProfileComponent } from './intership-director-module/student-profile/student-profile.component';
import { AccountManagementComponent } from './intership-director-module/account-management/account-management.component';

import { FypFilesModificationComponent } from './fyp-files-modification/fyp-files-modification.component';
import { PFECategoryComponent } from './Student/pfecategory/pfecategory.component';
import { PFECategoryDetailsComponent } from './Student/pfecategory-details/pfecategory-details.component';

import { SuggestedCategoriesComponent } from './department-head/suggested-categories/suggested-categories.component';
import { RoleGuardService as RoleGuard } from './services/security/roleguard.service';
import { PayPalComponent } from './admin/pay-pal/pay-pal.component';

import { MaxActionNumberOfTeacherPerDepartmentComponent } from './intership-director-module/max-action-number-of-teacher-per-department/max-action-number-of-teacher-per-department.component';
import { DepartmentProfileComponent } from './intership-director-module/department-profile/department-profile.component';

import { AdminDepartmentsComponent } from './admin/admin-departments/admin-departments.component';
import { FypPfeUpdateComponent } from './Student/fyp-pfe-update/fyp-pfe-update.component';
import { ReclamationComponent } from './Student/reclamation/reclamation.component';
import { TeachersComponent } from './department-head/teachers/teachers.component';
import { ChatroomComponent } from './chat/chatroom/chatroom.component';

import { IntershipUpdateComponent } from './Student/intership-update/intership-update.component';
import { FypFileDetailsComponent } from './Student/fyp-file-details/fyp-file-details.component';
import { SheetsManagementComponent } from './Student/Directeur/sheets-management/sheets-management.component';




/**
 * for admin & superAdmin routes please register them below with the prefix
 * /admin/* to ensure the use of the second header layout
 */

const routes: Routes = [
  {path : '', component : HomepageComponent},
  // start of administration components
  {path : 'admin', component : AdminHomepageComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {path : 'admin/departments', component : AdminDepartmentsComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  // end administration components
  // start of login,profiles  and registration
  {path : 'login', component : AuthenticationComponent},
  {path: 'profile', component: ProfileComponent, canActivate : [AuthGuard]},
  {path: 'company-profile', component: CompanyProfileComponent, canActivate : [AuthGuard]},
  // end login and registration
  {path: 'fypTemplate', component: FypTemplateManagementComponent},
  {path: 'fypConvention', component: FypConventionComponent},
  {path: 'student/inter', component: IntershipCComponent},
  {path: 'create', component:  IntershipCreateComponent},
  {path: 'update/:id', component: FypConventionComponent},
  {path: 'delete/:id', component:  IntershipCComponent},
  //fypPFE
  {path: 'fyp/create', component:  FypPFECreateComponent, canActivate: [RoleGuard], 
  data: { 
    expectedRole: 'Student'
  } },
  {path: 'fyp/update/:id', component: FypPfeUpdateComponent},
  {path: 'fyp/delete/:id', component: FypPFECreateComponent},
  {path: 'student/fypfile', component : IntershipCreateComponent},
  {path: 'student/skills', component: PFECategoryComponent},
  {path: 'student/skills/find/:id', component: PFECategoryDetailsComponent},
  {path: 'student/reclamation', component: ReclamationComponent},
  {path: 'student/up', component : IntershipUpdateComponent},
  {path: 'student/fyp/find/:id', component : FypFileDetailsComponent},
//SheetManagement
{path: 'Directeur/sheetPending', component : SheetsManagementComponent},


  //
  {path: 'uniDash', component: UniversityStatsComponent},
  {path: 'upload', component: UploadFileComponent},
  {path: 'university', component: UniversityComponent},
  {path: 'university/update/:id', component: UniversityFormComponent},
  {path: 'university/update', component: UniversityFormComponent},
  {path: 'site', component: SiteComponent},
  {path: 'defenseCalendar', component: DefenseCalendarComponent},
  {path: 'fypDefense', component: FYPDefenseComponent},
  {path: 'internshipDirector', component: FypFileComponent},
  {path : 'fypfile/history', component : FypfileHistoryComponent},
  { path: 'create-category', component: FypCategorieComponent },
 { path: 'admin/pay', component: PayPalComponent},
  {path: 'internshipDirector', component: FypFileComponent},
  {path : 'fypfile/history', component : FypfileHistoryComponent,
  canActivate: [RoleGuard],
  data: {
    expectedRole: 'departmentHead'
  } },
  {path : 'fypfile/tracking', component : FypfilesOperationsComponent,  canActivate: [RoleGuard],
  data: {
    expectedRole: 'departmentHead'
  }},
  {path : 'categories/suggestions', component : SuggestedCategoriesComponent,  canActivate: [RoleGuard],
  data: {
    expectedRole: 'departmentHead'
  }},
  {path : 'notifications/history', component : NoitificationsHistoryComponent, canActivate: [RoleGuard],
  data: {
    expectedRole: 'departmentHead'
  }},
  {path : 'dptteachers', component : TeachersComponent, canActivate: [RoleGuard],
  data: {
    expectedRole: 'departmentHead'
  }},
  {path: 'internshipDirector/studentManagement', component: StudentManagementComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path : 'notifications/history', component : NoitificationsHistoryComponent},
  {path : 'internshipDirector/fypFileBycategory', component : FypFileByCategoryComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path : 'internshipDirector/fypFileByYear', component : FypFileByYearComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path : 'internshipDirector/fypFileByState', component : FypFileByStateComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path : 'internshipDirector/fypFileByCountry', component : FypFileByCountryComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path: 'teacherFypFiles',component:TeacherFypfilesComponent},
  {path: 'majormodif',component:FypFilesModificationComponent},
  {path: 'internshipDirector/lateStudents',component:LateStudentListComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path: 'internshipDirector/FypFileManagment',component:FypFileManagementComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path: 'internshipDirector/studentProfile/:cin',component:StudentProfileComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path: 'internshipDirector/AccountManagement',component:AccountManagementComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path: 'internshipDirector/DepartmentMan',component:MaxActionNumberOfTeacherPerDepartmentComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path: 'chat',component:ChatroomComponent,canActivate: [RoleGuard], 
  data: { 
    expectedRole: 'departmentHead'
  }},
  {path: 'internshipDirector/DepartmentProfile/:id',component:DepartmentProfileComponent,canActivate: [RoleGuard],
  data: {
    expectedRole: 'internshipsDirector'
  }},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
