import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { options } from '@amcharts/amcharts4/core';
declare var paypal;
@Component({
  selector: 'app-payment-paypal',
  templateUrl: './payment-paypal.component.html',
  styleUrls: ['./payment-paypal.component.css']
})
export class PaymentPaypalComponent implements OnInit {
 
  @ViewChild('paypal',{static:false})paypalElement: ElementRef;  
  constructor() { }  
  planId: any;  
  subcripId: any;  
  basicAuth = 'Basic AVkDczwkxsfhpt2oQKJnEhrCZ7GDpAZ_x5Io4x22MFcnn8F4msMjSNj6bzb-m9vfgH9cednKiEJsgeUkECcA9IVW43kOGSVeyZ1VLyaUguKc34IAPyh21FrlB641EyHk2xPSY6QX58WAZZoh9H-pd1ThbtKNdg8o'; 
  ngOnInit() {     
    const self = this;  
    this.planId = 'P-20D52460DL479523BLV56M5Y';  //Default Plan Id
    paypal.Buttons({  
      createSubscription: function (data, actions) {  
        return actions.subscription.create({  
          'plan_id': self.planId,  
        });  
      },  
      onApprove: function (data, actions) {  
        console.log(data);  
        alert('You have successfully created subscription ' + data.subscriptionID);  
        self.getSubcriptionDetails(data.subscriptionID);  
      },  
      onCancel: function (data) {  
        // Show a cancel page, or return to cart  
        console.log(data);  
      },  
      onError: function (err) {  
        // Show an error page here, when an error occurs  
        console.log(err);  
      }  
  
    }).render(this.paypalElement.nativeElement);  
  
  }  
  // ============Start Get Subcription Details Method============================  
  getSubcriptionDetails(subcriptionId) {  
    const xhttp = new XMLHttpRequest();  
    xhttp.onreadystatechange = function () {  
      if (this.readyState === 4 && this.status === 200) {  
        console.log(JSON.parse(this.responseText));  
        alert(JSON.stringify(this.responseText));  
      }  
    };  
    xhttp.open('GET', 'https://api.sandbox.paypal.com/v1/billing/subscriptions/' + subcriptionId, true);  
    xhttp.setRequestHeader('Authorization', this.basicAuth);  
  
    xhttp.send();  
  }  
  // ============END Get Subcription Details Method========================  
  
}  
 


