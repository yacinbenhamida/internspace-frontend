import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FypFileComponent } from './fyp-file/fyp-file.component';
import { PerTypeSearchComponent } from './components/per-type-search/per-type-search.component';
import { TabelComponent } from './components/tabel/tabel.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { FypFileByCategoryComponent } from './fyp-file-by-category/fyp-file-by-category.component';
import { FypFileByYearComponent } from './fyp-file-by-year/fyp-file-by-year.component';
import { FypFileByStateComponent } from './fyp-file-by-state/fyp-file-by-state.component';
import { FypFileByCountryComponent } from './fyp-file-by-country/fyp-file-by-country.component';
import { LateStudentListComponent } from './late-student-list/late-student-list.component';
import { FypFileManagementComponent } from './fyp-file-management/fyp-file-management.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { MaxActionNumberOfTeacherPerDepartmentComponent } from './max-action-number-of-teacher-per-department/max-action-number-of-teacher-per-department.component';
import { DepartmentProfileComponent } from './department-profile/department-profile.component';
import { ValidateReportDepoComponent } from './validate-report-depo/validate-report-depo.component';
import { SoutenanceFilesComponent } from './soutenance-files/soutenance-files.component';
import { FilesByDiffCritComponent } from './files-by-diff-crit/files-by-diff-crit.component';


@NgModule({
  declarations: [FypFileComponent, PerTypeSearchComponent, TabelComponent, StudentManagementComponent, FypFileByCategoryComponent, FypFileByYearComponent, FypFileByStateComponent, FypFileByCountryComponent, LateStudentListComponent, FypFileManagementComponent, StudentProfileComponent, AccountManagementComponent, MaxActionNumberOfTeacherPerDepartmentComponent, DepartmentProfileComponent, ValidateReportDepoComponent, SoutenanceFilesComponent, FilesByDiffCritComponent,],
  imports: [
    CommonModule
  ]
})
export class IntershipDirectorModuleModule { }
