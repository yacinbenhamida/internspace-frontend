import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UniversityStatsComponent } from './university-stats/university-stats.component';
import { CountryStudentsMapComponent } from './university-stats/country-students-map/country-students-map.component';
// tslint:disable-next-line: max-line-length
import { InternshipYearDistributionComponent } from './university-stats/internship-year-distribution/internship-year-distribution.component';
import { StudentsSiteComponent } from './university-stats/students-site/students-site.component';
import { StudentsAbroadComponent } from './university-stats/students-abroad/students-abroad.component';
import { AbroadEvolutionPerYearComponent } from './university-stats/abroad-evolution-per-year/abroad-evolution-per-year.component';
import { MostRequestedCategoriesComponent } from './university-stats/most-requested-categories/most-requested-categories.component';
import { MostAcceptingCompaniesComponent } from './university-stats/most-accepting-companies/most-accepting-companies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatInputModule
} from '@angular/material';

import { StudentsInternshipByYearLocComponent } from './university-stats/students-internship-by-year-loc/students-internship-by-year-loc.component';

@NgModule({
  declarations: [
    UniversityStatsComponent,
    CountryStudentsMapComponent,
    InternshipYearDistributionComponent,
    StudentsSiteComponent,
    StudentsAbroadComponent,
    AbroadEvolutionPerYearComponent,
    MostRequestedCategoriesComponent,
    MostAcceptingCompaniesComponent,
    StudentsInternshipByYearLocComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class DashboardModule { }
