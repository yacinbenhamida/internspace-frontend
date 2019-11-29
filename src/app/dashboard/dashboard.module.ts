import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { UniversityStatsComponent } from './university-stats/university-stats.component';
import { CountryStudentsMapComponent } from './university-stats/country-students-map/country-students-map.component';
// tslint:disable-next-line: max-line-length
import { InternshipYearDistributionComponent } from './university-stats/internship-year-distribution/internship-year-distribution.component';
import { StudentsSiteComponent } from './university-stats/students-site/students-site.component';

@NgModule({
  declarations: [UniversityStatsComponent, CountryStudentsMapComponent, InternshipYearDistributionComponent, StudentsSiteComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class DashboardModule { }
