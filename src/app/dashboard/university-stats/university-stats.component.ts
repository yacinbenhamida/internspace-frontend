import { UniStatsService } from './../../services/dashboard/uni-stats.service';
import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-university-stats',
  templateUrl: './university-stats.component.html',
  styleUrls: ['./university-stats.component.css']
})
export class UniversityStatsComponent implements OnInit, AfterViewInit {

  chart: am4charts.XYChart;
  zone: NgZone;
  uniStatsService: UniStatsService;
  chartChache: any;

  uniId = '2';

  constructor(uniStatsService: UniStatsService, zone: NgZone) {
    this.uniStatsService = uniStatsService;
    this.zone = zone;
  }

  ngOnInit() {
    // this.uniStatsService.GetCoordsByCountryName('Tunisia').subscribe(coords => console.log(coords));
  }

  ngAfterViewInit() {
    // this.chart1();
  }

  chart1() {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('chart1', am4charts.XYChart);

      chart.paddingRight = 20;

      const data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: 'name' + i, value: visits });
      }

      chart.data = data;

      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = 'date';
      series.dataFields.valueY = 'value';

      series.tooltipText = '{valueY.value}';
      chart.cursor = new am4charts.XYCursor();

      const scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
  }

}
