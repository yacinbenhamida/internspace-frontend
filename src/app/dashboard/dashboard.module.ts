import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityStatsComponent } from './university-stats/university-stats.component';
import { CountryStudentsMapComponent } from './university-stats/country-students-map/country-students-map.component';

@NgModule({
  declarations: [UniversityStatsComponent, CountryStudentsMapComponent],
  imports: [
    CommonModule,
  ]
})
export class DashboardModule { }
