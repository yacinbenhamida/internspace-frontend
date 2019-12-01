import { FypFile } from "./fyp-file";
import { Company } from "../users/Company";

export interface FYPSubject {
  id:number;
  title: string;
  content: string;
  maxApplicants: string;
  country: string;
  fypFile: FypFile;
  company: Company;
  studentSubjects: any[];
  categories: any[];
  FYPCategory:any[]



}
