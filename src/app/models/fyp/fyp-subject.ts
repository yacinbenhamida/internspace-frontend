import { FypFile } from "./fyp-file";
import { Company } from "../users/Company";
import { FypCategory } from "./fyp-category";
export interface FYPSubject {
  id:number;
  title: string;
  content: string;
  maxApplicants: string;
  country: string;
  fypFile: FypFile;
  company: Company;
  studentSubjects: any[];
  categories: FypCategory[];
 FYPCategory:any[]
  



}
