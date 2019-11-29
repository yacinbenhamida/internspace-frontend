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
  selector: 'app-most-requested-categories',
  templateUrl: './most-requested-categories.component.html',
  styleUrls: ['./most-requested-categories.component.css']
})
export class MostRequestedCategoriesComponent implements OnInit, OnDestroy {

  zone: NgZone;
  uniStatsService: UniStatsService;
  chartChache: any;

  private chartData: any;
  result: any[];

  @Input() uniId: string;

  constructor(uniStatsService: UniStatsService, zone: NgZone) {
    this.uniStatsService = uniStatsService;
    this.zone = zone;

  }

  ngOnInit() {

    this.uniStatsService.GetUniversitaryYears().subscribe(e => {
      this.uniStatsService.GetMostRequestedCategoriesByCompanies().subscribe(ex => { this.result = ex; this.PlotData(); });
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

    const chart = am4core.create('chart6', am4plugins_forceDirected.ForceDirectedTree);
    const networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
    this.chartChache = chart;

    const mapObj = [];
    const count = this.result.length;

    if (this.result != null) {

      for (let x = 0; x < count; ++x) {

        const curVal = mapObj[this.result[x].name] = mapObj[this.result[x].name] ? mapObj[this.result[x].name] + 1 : 1;
        if (curVal > 1) {
          this.result[x] = null;
        }

      }

    }

    const newData = [];
    let finalData = [];

    if (this.result != null) {

      for (const x of this.result) {
        if (!x) {
          continue;
        }

        newData.push(
          {
            name: x.name,
            value: mapObj[x.name] * 15,
            children: []
          });
      }

      let i = count - 1;
      const bsize = 2;

      finalData = newData;

      while (i > 0) {
        const target = this.clamp(i - bsize, 0, count);
        if (finalData[target] == null) {
          continue;
        }

        for (let x = i; x > target; --x) {
          if (finalData[x] == null) {
            continue;
          }

          finalData[target].children.push(
            finalData[x]
          );

          finalData[x].children.push(
            {
              'name': '',
              'value': 0
            }
          );

          finalData[x] = null;
        }

        i = target;
      }

    }

    chart.data = [finalData[0]];

    networkSeries.dataFields.value = 'value';
    networkSeries.dataFields.name = 'name';
    networkSeries.dataFields.children = 'children';
    networkSeries.nodes.template.tooltipText = '{name} : {value}';
    networkSeries.nodes.template.fillOpacity = 1;
    networkSeries.manyBodyStrength = -20;
    networkSeries.links.template.strength = 1.8;
    networkSeries.minRadius = am4core.percent(5);

    networkSeries.nodes.template.label.text = '{name}';
    networkSeries.fontSize = 10;
  }

  // HELPER
  clamp(num: number, min: number, max: number): number {
    return num <= min ? min : num >= max ? max : num;
  }

}
