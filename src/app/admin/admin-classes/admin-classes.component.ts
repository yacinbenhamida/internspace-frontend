import { Component, OnInit, OnDestroy } from '@angular/core';
import { CsvHelperService } from 'src/app/services/exchanges/csvhelper.service';
import { StudyClassesService } from 'src/app/services/university/studyclasses.service';
import { ClassOption } from 'src/app/models/university/class-option';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { StudyClass } from 'src/app/models/studyClass';
import { UniversitaryYear } from 'src/app/models/university/universitary-year';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-classes',
  templateUrl: './admin-classes.component.html',
  styleUrls: ['./admin-classes.component.css']
})
export class AdminClassesComponent implements OnInit,OnDestroy {

  canUpload : boolean 
  options : ClassOption[] =[]
  selectedOption : ClassOption
  currentYear : UniversitaryYear
  listClasses : StudyClass[] = []
  lstClassesOptions: DataTables.Settings = {};
  lstClassesTrigger: Subject<StudyClass> = new Subject();
  constructor( private csvHelper:CsvHelperService,private clServ:StudyClassesService,
    private auth:AuthenticationService) { }

  ngOnInit() {
    this.lstClassesOptions = {  
      pagingType: 'full_numbers',
      pageLength: 4
    }
    this.clServ.getAllStudyClassesOfDept(this.auth.currentUserValue.department.id).subscribe(data=>{
      this.listClasses = data
      this.lstClassesTrigger.next()
    })
    this.clServ.getAllClassOptionsOfDept(this.auth.currentUserValue.department.id).subscribe(
      res=>{
        this.options = res
      }
    )
    this.clServ.getRegisteredUniYears().subscribe(y=>this.currentYear = y.filter(x=>x.endDate == new Date().getFullYear())[0])
  }
  ngOnDestroy() {
    this.lstClassesTrigger.unsubscribe()
  }
  fileChangeListener($file){
    if($file && $file.srcElement.files[0].name.endsWith('.csv')){
      var input = $file.target;         
             var reader = new FileReader();          
             reader.readAsText(input.files[0]);         
             reader.onload = (data) => {            
                  let csvData = reader.result;            
                  let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);           
                  let headersRow = this.csvHelper.getHeaderArray(csvRecordsArray);
                  if(confirm("are you sure you want to upload this data?")){
                    let csvRecords : StudyClass[] =  this.csvHelper.getDataRecordsArrayFromCSVFileClasses(csvRecordsArray,                                    
                     headersRow.length,this.selectedOption,this.currentYear);    
                    csvRecords.forEach(element => {
                    this.clServ.add(element).subscribe(fetched=>{
                      window.location.reload();
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
