import { Component, OnInit } from '@angular/core';
import { SheetsService } from 'src/app/services/student/Director/sheets.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { FYPFileModification } from 'src/app/models/fyp/fyp-file-modification';

@Component({
  selector: 'app-sheets-modification',
  templateUrl: './sheets-modification.component.html',
  styleUrls: ['./sheets-modification.component.css']
})
export class SheetsModificationComponent implements OnInit {
  All: FYPFileModification[];
  fypMod: FYPFileModification;
  fyp: FYPFileModification;
  index:number;
  text:string;
  conf:string="confirm";
  constructor( private sheetsService: SheetsService,private router: Router,private auth:AuthenticationService) { }

  ngOnInit() {
    this.All =this.getFyps();
    this.getFypAccept(this.index)
    console.log(this.All);

  }


  getFyps(){
    this.sheetsService.SheetsUpdated().subscribe(fypts => {
      this.All = fypts as FYPFileModification[];
      this.All.push;
      console.log(this.All);})
      return this.All
  }
  getFypAccept(id:number){
    this.sheetsService.AcceptSheet(id).subscribe(fypts => {
      this.All = fypts as FYPFileModification[];
      this.All.push;
     
      this.conf="confirmed";
      console.log(this.All);})
      this.router.navigate(['/Directeur/sheetModification']);
      return this.All
  }

  getFypCancel(id:number){
    this.sheetsService.CancelSheet(id).subscribe(fypts => {
      this.All = fypts as FYPFileModification[];
      this.All.push;
     
      this.conf="confirmed";
      console.log(this.All);})
      this.router.navigate(['/Directeur/sheetModification']);
      return this.All
  }

}
