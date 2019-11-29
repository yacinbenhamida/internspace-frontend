import { UniStatsService } from './../../../services/dashboard/uni-stats.service';
import { Component, OnInit, NgZone, OnDestroy, Input, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

/* Chart code */
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-students-abroad',
  templateUrl: './students-abroad.component.html',
  styleUrls: ['./students-abroad.component.css']
})
export class StudentsAbroadComponent implements OnInit, OnDestroy {

  uniStatsService: UniStatsService;
  zone: NgZone;
  chartChache: any;
  abroadPercentage = 0.0;

  @Input() uniId = '2';

  constructor(uniStatsService: UniStatsService, zone: NgZone) {
    this.uniStatsService = uniStatsService;
    this.zone = zone;
  }

  ngOnInit() {
    this.uniStatsService.GetStudentsLocationDistribution(this.uniId, true).subscribe(e => { this.abroadPercentage = e; this.PlotView(); });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartChache) {
        this.chartChache.dispose();
      }
    });
  }

  PlotView() {
    // Create chart instance
    const chart = am4core.create('chart4', am4charts.PieChart);
    this.chartChache = chart;

    // Set data
    let selected;

    let types = [{
      type: 'Abroad',
      percent: this.abroadPercentage * 100,
      color: chart.colors.getIndex(0),
      subs: [{
        type: '',
        percent: this.abroadPercentage * 100 / 5
      }, {
        type: '',
        percent: this.abroadPercentage * 100 / 5
      }, {
        type: '',
        percent: this.abroadPercentage * 100 / 5
      }, {
        type: '',
        percent: this.abroadPercentage * 100 / 5
      }, {
        type: '',
        percent: this.abroadPercentage * 100 / 5
      }]
    }, {
      type: 'Local',
      percent: 100 - this.abroadPercentage * 100,
      color: chart.colors.getIndex(1),
      subs: [{
        type: '',
        percent: (100 - this.abroadPercentage * 100) / 5
      }, {
        type: '',
        percent: (100 - this.abroadPercentage * 100) / 5
      }, {
        type: '',
        percent: (100 - this.abroadPercentage * 100) / 5
      }, {
        type: '',
        percent: (100 - this.abroadPercentage * 100) / 5
      }, {
        type: '',
        percent: (100 - this.abroadPercentage * 100) / 5
      }]
    }];

    // Add data
    chart.data = generateChartData();

    // Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'percent';
    pieSeries.dataFields.category = 'type';
    pieSeries.slices.template.propertyFields.fill = 'color';
    pieSeries.slices.template.propertyFields.isActive = 'pulled';
    pieSeries.slices.template.strokeWidth = 0;

    function generateChartData() {
      const chartData = [];
      for (let i = 0; i < types.length; ++i) {
        if (i === selected) {
          for (let x = 0; x < types[i].subs.length; ++x) {
            chartData.push({
              type: types[i].subs[x].type,
              percent: types[i].subs[x].percent,
              color: types[i].color,
              pulled: true
            });
          }
        } else {
          chartData.push({
            type: types[i].type,
            percent: types[i].percent,
            color: types[i].color,
            id: i
          });
        }
      }
      return chartData;
    }

    pieSeries.slices.template.events.on('hit', function (event) {
      if (event.target.dataItem.dataContext.id != undefined) {
        selected = event.target.dataItem.dataContext.id;
      } else {
        selected = undefined;
      }
      chart.data = generateChartData();
    });
  }
}
