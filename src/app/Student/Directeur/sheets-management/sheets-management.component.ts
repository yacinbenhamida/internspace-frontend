import { Component, OnInit } from '@angular/core';
import { SheetsService } from 'src/app/services/student/Director/sheets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FypFile } from 'src/app/models/fyp/fyp-file';

@Component({
  selector: 'app-sheets-management',
  templateUrl: './sheets-management.component.html',
  styleUrls: ['./sheets-management.component.css']
})
export class SheetsManagementComponent implements OnInit {


  AllPend: FypFile[];
  fypSubject: FypFile;
  fyp: FypFile;
  index:number;
  text:string;
  constructor( private sheetsService: SheetsService, private router: Router,private ar:ActivatedRoute) { }

  ngOnInit() {
    this.GetSheetsPending();
   // this.Accept(this.fyp);
    this.fyp = this.onClick(this.fyp);
    console.log(this.onClick(this.fyp));
    console.log(this.index);
    this.sheetsService.SheetsPending().subscribe(fypts => {
      this.AllPend = fypts as FypFile[];
      this.AllPend.push;
      console.log(this.AllPend);})
  }
  

  GetSheetsPending(){
    this.sheetsService.SheetsPending().subscribe(fypts => {
      this.AllPend = fypts as FypFile[];
      this.AllPend.push;
      console.log(this.AllPend);})
  }
Accept(fyp : FypFile){
 
  this.sheetsService.AcceptPFE(fyp.id).subscribe(fypts => {
    this.AllPend = fypts as FypFile[];
    this.AllPend.push;
    console.log(this.AllPend);})
}

Cancel(fyp : FypFile){
 
  this.sheetsService.cancelPFE(fyp.id).subscribe(fypts => {
    this.AllPend = fypts as FypFile[];
    this.AllPend.push;
    console.log(this.AllPend);})
}


onClick(fyp : FypFile){
  console.log(fyp);
  this.fypSubject = fyp;
  return fyp
}

RefusM(textt:string,fyp : FypFile){
  this.sheetsService.MailRefus("09857132",textt).subscribe((data:any) => {
    console.log(data);})

}



}
