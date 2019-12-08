import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FypFile } from '../models/fyp/fyp-file';
import { TeacherServiceService } from '../services/Teacher/teacher-service.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/security/authentication.service';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { NotifierService, NotifierOptions } from "angular-notifier";
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-teacher-fypfiles',
  templateUrl: './teacher-fypfiles.component.html',
  styleUrls: ['./teacher-fypfiles.component.css']
})
export class TeacherFypfilesComponent implements OnInit {
  private readonly notifier: NotifierService;
  selectedfyp: string;
  state:true;
  hid:false;
  private lastSelectedCategory: FypFile;
  fypllist:FypFile[];
  fypCache: string[]=['pending','prevalidated','supervised','protractored'];
  restApi: TeacherServiceService;
  router: Router;
  zone: NgZone;
  message:String;

  chartChache: any; 

  @ViewChild("customNotification", { static: true }) customNotificationTmpl;
  timeLeft: number = 10;
  interval;
  private chartData: any;
  majo:number;
  xx:number;
  constructor(zone: NgZone,notifierService: NotifierService,
    private auth:AuthenticationService,
     restApi: TeacherServiceService, 
     router: Router
  ) {this.restApi=restApi;
  this.router=router; this.zone = zone;
  this.notifier = notifierService;}
  startTimer() {
    
   
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.restApi.getmodificationssize().subscribe(res =>{this.xx=res;});
console.log(this.xx);

        if (this.xx!=this.majo)
        {
          this.showNotification("you have "+this.xx+"  modification request")
        }
        this.timeLeft = 10;
        console.log(this.timeLeft)
      }
    },10000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
   notifierDefaultOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: "left",
            distance: 12
        },
        vertical: {
            position: "bottom",
            distance: 12,
            gap: 10
        }
    },
    theme: "material",
    behaviour: {
        autoHide: 5000,
        onClick: false,
        onMouseover: "pauseAutoHide",
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: "slide",
            speed: 300,
            easing: "ease"
        },
        hide: {
            preset: "fade",
            speed: 300,
            easing: "ease",
            offset: 50
        },
        shift: {
            speed: 300,
            easing: "ease"
        },
        overlap: 150
    }
};
  ngOnInit() {
    this.restApi.getmodificationssize().subscribe(res =>{this.majo=res;
    });
    console.log(this.majo);
    this.startTimer();
    this.restApi.getAllFypFiles(this.auth.currentUserValue.id).subscribe(files => {
      this.fypllist = files as FypFile[]});
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartChache) {
        this.chartChache.dispose();
      }
    });
  }
  showNotification(mes:string) {
    this.notifier.show({
        message:mes,
        type: "info",
        template: this.customNotificationTmpl
    });
}



  ngAfterViewInit() {

    this.ngOnDestroy(); // trying to destroy current chart

    const chart = am4core.create('chart1', am4charts.XYChart);
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


    this.onChange_fyp();
  }
  onChange_fyp(){
    console.log(document.querySelector('select').value);
    if (document.querySelector('select').value=="pending")
    {
      this.state=true;
     this.restApi.GetFYPFILEPending().subscribe(files => {
      this.fypllist = files as FypFile[]});

      this.restApi.getfypsize(document.querySelector('select').value,this.auth.currentUserValue.id).subscribe(res => {
        // return;
        const newData = [];
  
        if (res != null) {
            newData.push(
              { 'uy':document.querySelector('select').value ,
                'amount': res ,
                'res': res
              });

        }
  
        this.chartChache.data = newData;
  
        
  this.message=res+"";
      });
      this.showNotification("you have "+this.message+"pending fyp files")

    }
     if (document.querySelector('select').value=="prevalidated")
    {
      this.state=true;
      this.restApi.GetPrevalidatedFyp(this.auth.currentUserValue.id).subscribe(files => {
        this.fypllist = files as FypFile[]});
        console.log(document.querySelector('select').value);
        console.log(this.fypllist);
        this.restApi.getfypsize(document.querySelector('select').value,this.auth.currentUserValue.id).subscribe(res => {
          // return;
          const newData = [];
    
          if (res != null) {
    
          
              newData.push(
                { 'uy':document.querySelector('select').value ,
                  'amount': res ,
                  'res': res
                });
            
    
          }
    
          this.chartChache.data = newData;
    
          
          this.message=res+"";
        });
        this.showNotification("you have "+this.message+"prevalidated fyp files")
    }
    if (document.querySelector('select').value=="supervised")
    {
      this.state=true;
      this.restApi.GetSupervisedFyp(this.auth.currentUserValue.id).subscribe(files => {
        this.fypllist = files as FypFile[]});
        console.log(document.querySelector('select').value);
        console.log(this.fypllist);
        this.restApi.getfypsize(document.querySelector('select').value,this.auth.currentUserValue.id).subscribe(res => {
          // return;
          const newData = [];
    
          if (res != null) {
    
          
              newData.push(
                { 'uy':document.querySelector('select').value ,
                  'amount': res ,
                  'res': res
                });
            
    
          }
    
          this.chartChache.data = newData;
    
          
          this.message=res+"";
        });
        this.showNotification("you have "+this.message+"supervised fyp files")
    }
    if (document.querySelector('select').value=="protractored")
    {
      this.state=true;
      this.restApi.Getprotractoredfypfiles(this.auth.currentUserValue.id).subscribe(files => {
        this.fypllist = files as FypFile[]});
        console.log(document.querySelector('select').value);
        console.log(this.fypllist);
        this.restApi.getfypsize(document.querySelector('select').value,this.auth.currentUserValue.id).subscribe(res => {
          // return;
          const newData = [];
    
          if (res != null) {
    
          
              newData.push(
                { 'uy':document.querySelector('select').value ,
                  'amount': res ,
                  'res': res
                });
            
    
          }
    
          this.chartChache.data = newData;
    
          
          this.message=res+"";
        });
        this.showNotification("you have "+this.message+"protractored fyp files")
    }
 


  
}
  }

