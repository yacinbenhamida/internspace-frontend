import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FypFileComponent } from './fyp-file/fyp-file.component';
import { PerTypeSearchComponent } from './components/per-type-search/per-type-search.component';
import { TabelComponent } from './components/tabel/tabel.component';
import { StudentManagementComponent } from './student-management/student-management.component';



@NgModule({
  declarations: [FypFileComponent, PerTypeSearchComponent, TabelComponent, StudentManagementComponent],
  imports: [
    CommonModule
  ]
})
export class IntershipDirectorModuleModule { }
