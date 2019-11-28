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


@NgModule({
  declarations: [FypFileComponent, PerTypeSearchComponent, TabelComponent, StudentManagementComponent, FypFileByCategoryComponent, FypFileByYearComponent, FypFileByStateComponent, FypFileByCountryComponent,],
  imports: [
    CommonModule
  ]
})
export class IntershipDirectorModuleModule { }
