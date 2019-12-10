
import { FYPSubject } from './fyp-subject';
import { Company } from '../users/Company';
import { Student } from '../users/student';
import { UniversitaryYear } from '../university/universitary-year';
export interface FypFile {
 id:number
  title: string;
  description: string;
  problematic: string;
  fileStatus: string;
  finalMark: number;
  isCanceled: boolean;
  isArchived: boolean;
  isPrevalidated: boolean;
  isConfirmed: boolean;
  subject: FYPSubject;
  features: any[];
  interventions: any[];
  keywords: any[];
  categories: any[];
  student:Student;
  up:boolean;
  universitaryYear:UniversitaryYear;

 


  
}
