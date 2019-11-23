
export interface FypFile {
  title: string;
  description: string;
  problematic: string;
  fileStatus: string;
  finalMark: number;
  isCanceled: boolean;
  isArchived: boolean;
  isPrevalidated: boolean;
  isConfirmed: boolean;

  features: any[];
  interventions: any[];
  keywords: any[];
  categories: any[];
}
