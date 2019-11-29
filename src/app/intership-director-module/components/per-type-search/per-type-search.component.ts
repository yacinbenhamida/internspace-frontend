import { Component, OnInit, Input } from '@angular/core';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { float } from 'html2canvas/dist/types/css/property-descriptors/float';
import { FypFile } from 'src/app/models/fyp/fyp-file';

@Component({
  selector: 'app-per-type-search',
  templateUrl: './per-type-search.component.html',
  styleUrls: ['./per-type-search.component.css'],
})
export class PerTypeSearchComponent implements OnInit {

  @Input() label;
  @Input() position;
  constructor(private _internshipDirectorService : InternshipDirectorService) { }

  ngOnInit() {

  }

  //Styles
  public styleRight={
    top:"0",
    margin: "120px",
    display: "inline-block",
    width: "25%",
    height: "140px",
    border:"solid 5px black",
    borderTop: "none",
    borderLeft: "none",
    float:"right"
 
  };


  public default={
    top:"0",
    margin: "120px",
    display: "inline-block",
    width: "25%",
    height: "140px",
    border:"solid 5px black",
    borderTop: "none",
    borderRight: "none",
  };

  public DefaultMain={
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
  public ReversedMain={
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection:"row-reverse"
  }


  //JS logique
  options:string[]=["select an option","pending","confirmed","declined"];
  option2:string[]=["select an option","Consulting","Research"];
  FYPFiles:FypFile[];
  state:Boolean=true;
  searchInput:string="";
  selectValue:string="";

  ClickHandler =(xx)=>{
    if(xx==="CATEGORY")
    {
    this._internshipDirectorService.FypFileByCategory(this.selectValue).subscribe(data=>this.FYPFiles=data);
    this.state=false;

    }

    if(xx==="YEAR")
    {
      this._internshipDirectorService.FypFileByYear(this.searchInput).subscribe(data=>this.FYPFiles=data)
      this.state=false;
    }
    if(xx==="FILE-STATE")
    {
    this._internshipDirectorService.FypFileByState(this.selectValue).subscribe(data=>this.FYPFiles=data)
    this.state=false;
    }
    if(xx==="COUNTRY")
    {
   this._internshipDirectorService.FypFileByCountry(this.searchInput).subscribe(data=>this.FYPFiles=data)
   this.state=false;
  }

  }

 
}
