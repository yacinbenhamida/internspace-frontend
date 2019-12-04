import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternshipDirectorService } from 'src/app/services/InternShipDirector/internship-director.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { Department } from 'src/app/models/department';
@Component({
  selector: 'app-department-profile',
  templateUrl: './department-profile.component.html',
  styleUrls: ['./department-profile.component.css']
})
export class DepartmentProfileComponent implements OnInit {
id:string;
department:Department = new Department();
selectedRole :string=null;
selected;
fixedNumber:number=0;
oldNumber:number=0;


  constructor(private _Activatedroute:ActivatedRoute,private _interShipDService :InternshipDirectorService) { 
    
  }

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this._interShipDService.departmentInfo(this.id).subscribe(data=>{this.department=data,console.log(this.department);});
  }

  changeNumberAllowed=(x)=>{
    if(x==="preV"){
   this.selectedRole="as pre-validator"
   this.selected=x;
   this.oldNumber=this.department.numberOfActionsAllowedForPreValidators;
   
  }else if(x==="pres"){
    this.selectedRole="as presedent"
    this.selected=x;
    this.oldNumber=this.department.numberOfActionsAllowedForPresidents;
  }else if(x==="prot"){
    this.selectedRole="as protrector"
    this.selected=x;
    this.oldNumber=this.department.numberOfActionsAllowedForProtractors;
    
  }else {
    this.selectedRole="as supervisor"
    this.selected=x;
    this.oldNumber=this.department.numberOfActionsAllowedForSupervisors;
    
  }
  }

  UpdateTabelWithNewNumber=()=>{
    if(this.selected==="preV"){
    this._interShipDService.FixNumberAsPreValidator(this.fixedNumber.toString(),this.id).subscribe(data=>console.log("done "));

  } if(this.selected==="pres"){
  
   this._interShipDService.FixNumberAsJuryPresident(this.fixedNumber.toString(),this.id).subscribe(data=>console.log("done "));
  } if(this.selected==="prot"){
    
    this._interShipDService.FixNumberAsProtractor(this.fixedNumber.toString(),this.id).subscribe(data=>console.log("done "));
  }if(this.selected==="super"){
   
    this._interShipDService.FixNumberAsSupervisor(this.fixedNumber.toString(),this.id).subscribe(data=>console.log("done "));
  }
  setTimeout(function(){
    window.location.reload();
 }, 2000);
}

}
