import { Injectable } from '@angular/core';
import { Department } from 'src/app/models/department';
import { AuthenticationService } from '../security/authentication.service';

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
