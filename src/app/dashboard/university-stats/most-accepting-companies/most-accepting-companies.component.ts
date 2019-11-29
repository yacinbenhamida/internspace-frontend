import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/User';
import { Company } from './../../../models/users/Company';
import { UniversitaryYear } from './../../../models/university/universitary-year';
import { FypCategory } from './../../../models/fyp/fyp-category';
import { UniStatsService } from './../../../services/dashboard/uni-stats.service';
import { Component, OnInit, AfterViewInit, NgZone, OnDestroy, Input } from '@angular/core';
/* Imports */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { retryWhen } from 'rxjs/operators';

am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-most-accepting-companies',
  templateUrl: './most-accepting-companies.component.html',
  styleUrls: ['./most-accepting-companies.component.css']
})
export class MostAcceptingCompaniesComponent implements OnInit, OnDestroy {

  zone: NgZone;
  uniStatsService: UniStatsService;
  chartChache: any;
  companiesCache: any[];
  selectedCompany: any;

  modalService: NgbModal;

  @Input() uniId = '2';
  @Input() n = '20';

  // list of companies
  // list of uys
  uysCache: UniversitaryYear[];

  constructor(uniStatsService: UniStatsService, zone: NgZone, modalService: NgbModal) {
    this.uniStatsService = uniStatsService;
    this.zone = zone;
    this.modalService = modalService;
  }

  openScrollableContent(longContent, i) {
    this.selectedCompany = this.companiesCache[i];
    this.modalService.open(longContent, { scrollable: true, size: 'xl' });
  }

  ngOnInit() {
    this.uniStatsService.GetUniversitaryYears().subscribe(e => {
      this.uysCache = e;
      this.uniStatsService.GetMostCompanyAcceptingInternsWithUniversity(this.uniId, this.n)
        .subscribe(ex => { this.companiesCache = ex; this.PlotData(); });
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartChache) {
        this.chartChache.dispose();
      }
    });
  }

  PlotData() {

    console.log(this.companiesCache);

  }

}
