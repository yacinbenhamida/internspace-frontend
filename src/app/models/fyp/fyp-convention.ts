import { Company } from "../users/Company";
import { Student } from "../users/student";

export interface FypConvention {
   
    id: string
    startDate: string;
    endDate: string;
    companySupervisorEmail: string;
    company: Company;
    isCanceled :boolean;
  
    
  
  }