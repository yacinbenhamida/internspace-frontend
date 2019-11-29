import { UniStatsService } from './../../../services/dashboard/uni-stats.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-students-site',
  templateUrl: './students-site.component.html',
  styleUrls: ['./students-site.component.css']
})
export class StudentsSiteComponent implements OnInit {

  @Input() uniId = '2';
  siteId = '4';

  studentsCache = [];
  uniStatsService: UniStatsService;
  constructor(uniStatsService: UniStatsService) {
    this.uniStatsService = uniStatsService;

  }

  ngOnInit() {
    this.uniStatsService.GetStudentsBySite(this.siteId).subscribe(res => {

      console.log(res);
      this.studentsCache = res;
    });
  }

}
