import { Company } from "../users/Company";

export interface FypConvention {
   
    id: string
    startDate: string;
    endDate: string;
    companySupervisorEmail: string;
    company: Company;
    student: any;
    
  
  }