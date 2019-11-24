import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityStatsComponent } from './university-stats/university-stats.component';
import { CountryStudentsMapComponent } from './university-stats/country-students-map/country-students-map.component';
// tslint:disable-next-line: max-line-length
import { InternshipYearDistributionComponent } from './university-stats/internship-year-distribution/internship-year-distribution.component';

@NgModule({
  declarations: [UniversityStatsComponent, CountryStudentsMapComponent, InternshipYearDistributionComponent],
  imports: [
    CommonModule,
  ]
})
export class DashboardModule { }
