import { FypFile } from "./fyp-file";

export interface FYPSubject {
  id:number;
  title: string;
  content: string;
  maxApplicants: string;
  country: string;
  fypFile: FypFile;
  company: any;
  studentSubjects: any[];
  categories: any[];
  FYPCategory:any[]



}
