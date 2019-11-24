import { Student } from './../../../models/users/student';
import { UniStatsService } from './../../../services/dashboard/uni-stats.service';
import { Component, OnInit, NgZone, AfterViewInit, OnDestroy, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-country-students-map',
  templateUrl: './country-students-map.component.html',
  styleUrls: ['./country-students-map.component.css']
})
export class CountryStudentsMapComponent implements OnInit, AfterViewInit, OnDestroy {

  chart: am4charts.XYChart;
  zone: NgZone;
  uniStatsService: UniStatsService;
  chartChache: any;
  studentsCache: Student[];

  @Input() uniId: string;

  constructor(uniStatsService: UniStatsService, zone: NgZone) {
    this.uniStatsService = uniStatsService;
    this.zone = zone;

  }

  ngOnInit() {
    // this.uniStatsService.GetCoordsByCountryName('Tunisia').subscribe(coords => console.log(coords));
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartChache) {
        this.chartChache.dispose();
      }
    });
  }

  ngAfterViewInit() {
    // Create map instance
    this.chartChache = am4core.create('chart0', am4maps.MapChart);

    // Set map definition
    this.chartChache.geodata = am4geodata_worldLow;

    // Set projection
    this.chartChache.projection = new am4maps.projections.Miller();

    // Create map polygon series
    const polygonSeries = this.chartChache.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Services test
    // console.log(this.uniStatsService.GetCountryCodeByName('Tuinsia'));
    // this.uniStatsService.GetStudentsLocationDistribution(this.uniId, true).subscribe(res => console.log(res));

    this.uniStatsService.GetStudentInternshipPerCountry(this.uniId).subscribe(res => {
      const mapData = res;
      const polyData = [];

      for (const md in mapData) {
        if (md) {
          polyData.push(
            {
              'id': this.uniStatsService.GetCountryCodeByName(md)
              , 'color': am4core.color('#0a5ce0')
              , 'description': 'Description Placeholder'
              , 'students': mapData[md]
            });
        }
      }

      // Add some custom data
      polygonSeries.data = polyData;

      // Configure series
      const polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = '{name}';
      polygonTemplate.fill = am4core.color('#bdceeb');
      polygonTemplate.propertyFields.fill = 'color';

      // On Click
      polygonTemplate. events.on('hit', function (ev) {
        this.onMapCountryClick(ev);
      }, this);

      // Create hover state and set alternative fill color
      const hs = polygonTemplate.states.create('hover');
      hs.properties.fill = am4core.color('#e0470a');

      // Remove Antarctica
      polygonSeries.exclude = ['AQ'];

      // Add zoom control
      this.chartChache.zoomControl = new am4maps.ZoomControl();
    });

  }

  onMapCountryClick(ev: any) {

    let data: any; // {'id': '', 'name': '', 'description': ''};
    data = ev.target.dataItem.dataContext;
    const info = document.getElementById('info');

    if (data.students) {
      this.studentsCache = data.students;
    }

    info.innerHTML = '<h3>' + data.name + '(' + data.id + ')</h3>';
    if (data.description) {
      info.innerHTML += data.description;
    } else {
      info.innerHTML += '<i>No internships found.</i>';
    }

  }

}
