import { UniStatsService } from './../../services/dashboard/uni-stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-stats',
  templateUrl: './university-stats.component.html',
  styleUrls: ['./university-stats.component.css']
})
export class UniversityStatsComponent implements OnInit {

  uniStatsService: UniStatsService;

  constructor(uniStatsService: UniStatsService) {
    this.uniStatsService = uniStatsService;
  }

  ngOnInit() {
    // this.uniStatsService.GetCoordsByCountryName('Tunisia').subscribe(coords => console.log(coords));
  }

}
