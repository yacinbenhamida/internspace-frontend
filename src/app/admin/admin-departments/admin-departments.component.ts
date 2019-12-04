import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/university/department.service';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { CsvHelperService } from 'src/app/services/exchanges/csvhelper.service';

@Component({
  selector: 'app-admin-departments',
  templateUrl: './admin-departments.component.html',
  styleUrls: ['./admin-departments.component.css']
})
export class AdminDepartmentsComponent implements OnInit {
 
  listeDepartments : any[] = []
  constructor(private depServ:DepartmentService,private authServ:AuthenticationService,
    private csvHelper:CsvHelperService) { }

  ngOnInit() {
    this.depServ.getAllDepartmentsOfSite(this.authServ.currentUserValue.department.site.id).
    subscribe(result=>{
      this.listeDepartments = result
    })
  }
  fileChangeListener($file:any){
    if($file && $file.srcElement.files[0].name.endsWith('.csv')){
      var input = $file.target;         
             var reader = new FileReader();          
             reader.readAsText(input.files[0]);         
             reader.onload = (data) => {            
                  let csvData = reader.result;            
                  let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);           
                  let headersRow = this.csvHelper.getHeaderArray(csvRecordsArray);
                  if(confirm("are you sure you want to upload this data?")){
                    let csvRecords : Department[] =  this.csvHelper.getDataRecordsArrayFromCSVFile(csvRecordsArray,                                    
                     headersRow.length);    
                    csvRecords.forEach(element => {
                    this.depServ.addDepartment(element).subscribe(fetched=>{
                      this.listeDepartments.push(fetched);
                    })      
                  });   
                  console.log("parsed CSV"+csvRecords)  
                  }             
                    
              }               
                     reader.onerror = function() {            
                         alert("Unable to read "+ input.files[0]);          
                     };      
            } else {          
                   alert("Please import valid .csv file.");                   
            } 
    }
  
}
