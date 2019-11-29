
export interface FypFile {
  id:number;
  title: string;
  description: string;
  problematic: string;
  fileStatus: string;
  finalMark: number;
  isCanceled: boolean;
  isArchived: boolean;
  isPrevalidated: boolean;
  isConfirmed: boolean;

  subject: any;
  features: any[];
  interventions: any[];
  keywords: any[];
  categories: any[];
  
}
