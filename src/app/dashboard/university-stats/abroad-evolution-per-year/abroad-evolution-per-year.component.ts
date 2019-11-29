import { UniversitaryYear } from './../../../models/university/universitary-year';
import { FypCategory } from './../../../models/fyp/fyp-category';
import { UniStatsService } from './../../../services/dashboard/uni-stats.service';
import { Component, OnInit, AfterViewInit, NgZone, OnDestroy, Input } from '@angular/core';
/* Imports */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-abroad-evolution-per-year',
  templateUrl: './abroad-evolution-per-year.component.html',
  styleUrls: ['./abroad-evolution-per-year.component.css']
})
export class AbroadEvolutionPerYearComponent implements OnInit, OnDestroy {

  zone: NgZone;
  uniStatsService: UniStatsService;
  chartChache: any;

  private chartData: any;
  result: any[];
  uysCache: UniversitaryYear[];

  @Input() uniId: string;

  constructor(uniStatsService: UniStatsService, zone: NgZone) {
    this.uniStatsService = uniStatsService;
    this.zone = zone;

  }

  ngOnInit() {

    this.uniStatsService.GetUniversitaryYears().subscribe(e => {
      this.uysCache = e;
      this.uniStatsService.GetAbroadPercentagePerYear(this.uniId).subscribe(ex => { this.result = ex; this.PlotData(); });
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

    console.log(this.result);

    const chart = am4core.create('chart5', am4charts.XYChart);
    this.chartChache = chart;
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in


    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = 'uy';
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;
    categoryAxis.renderer.labels.template.dy = 5;

    const image = new am4core.Image();
    image.horizontalCenter = 'middle';
    image.width = 20;
    image.height = 20;
    image.verticalCenter = 'middle';

    categoryAxis.dataItems.template.bullet = image;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.minGridDistance = 30;
    valueAxis.renderer.baseGrid.disabled = true;


    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = 'uy';
    series.dataFields.valueY = 'amount';

    series.columns.template.tooltipText = '{valueY.value}';
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;


    // tslint:disable-next-line: max-line-length
    if (this.result == null) {
      return;
    }

    // return;
    const newData = [];

    for (let x = 0; x < this.uysCache.length; x++) {

      console.log(x);

      newData.push(
        {
          'uy': this.uysCache[x].endDate + ' - ' + this.uysCache[x].startDate,
          'amount': x + 1 in this.result ? this.result[x + 1] : 0,
        });
    }

    this.chartChache.data = newData;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set

    /**********************
     *fiha probleme valueY*
     **********************/

    /*series.columns.template.adapter.add('fill', function (fill, target) {
      console.log(target);
      return chart.colors.getIndex(target.dataItem.valueY + 10);
    });*/


  }

}
