import { FypFile } from './fyp-file';
import { Company } from '../users/Company';
import { FypCategory } from './fyp-category';
export interface FYPSubject {
  id: number;
  title: string;
  content: string;
  maxApplicants: number;
  country: string;
  fypFile: FypFile;
  company: Company;

  studentsAppliances: any[];
  // studentSubjects: any[];
  // categories: FypCategory[];
  // FYPCategory:any[]




}
