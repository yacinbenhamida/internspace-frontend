import { Injectable } from '@angular/core';
import { Department } from 'src/app/models/department';
import { AuthenticationService } from '../security/authentication.service';
import { StudyClass } from 'src/app/models/studyClass';
import { ClassOption } from 'src/app/models/university/class-option';
import { UniversitaryYear } from 'src/app/models/university/universitary-year';

@Injectable({
  providedIn: 'root'
})
export class CsvHelperService {

    constructor(private authServ:AuthenticationService) { }

    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) 
    {     
              var dataArr : Department[] = []          
              for (let i = 1; i < csvRecordsArray.length; i++) {         
                   let data = csvRecordsArray[i].split(',');         
                   if (data.length == headerLength) {
                       console.log(data[1].trim())      
                        let csvRecord: Department = {
                            id : 0,
                            name : data[0].trim(),
                            description : data[1].trim() , 
                            numberOfActionsAllowedForPreValidators : data[2].trim(),
                            numberOfActionsAllowedForPresidents : data[3].trim(),
                            numberOfActionsAllowedForSupervisors : data[4].trim(),
                            numberOfActionsAllowedForProtractors : data[5].trim(),
                            site : this.authServ.currentUserValue.department.site,
                            yearOfCreation : new Date()
                        };
                        
                        console.log("service "+ (csvRecord as Department) );
                        dataArr.push(csvRecord);          
                   }       
               }   
        return dataArr; 
    } 
    getDataRecordsArrayFromCSVFileClasses(csvRecordsArray: any, headerLength: any,option : ClassOption
        ,year:UniversitaryYear) 
    {     
              var dataArr : StudyClass[] = []          
              for (let i = 1; i < csvRecordsArray.length; i++) {         
                   let data = csvRecordsArray[i].split(',');         
                   if (data.length == headerLength) {
                       console.log(data[1].trim())      
                        let csvRecord: StudyClass = {
                            id : 0,
                            classYear : data[0].trim(),
                            name : data[1].trim(),
                            classOption : option,
                            universitaryYear : year
                        };
                        
                        console.log("service "+ (csvRecord as StudyClass) );
                        dataArr.push(csvRecord);          
                   }       
               }   
        return dataArr; 
    }
    getHeaderArray(csvRecordsArr: any) 
    {      
        let headers = csvRecordsArr[0].split(',');      
        let headerArray = [];            
        for (let j = 0; j < headers.length; j++) 
        {        
            headerArray.push(headers[j]);      
        }        
        return headerArray; 
    } 



}
