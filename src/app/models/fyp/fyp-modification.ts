import { FypFile } from "./fyp-file";

export interface FypFileModification {
    id:number;
    isChanged: boolean;
    isConfirmed: boolean;
    features: any[];
    fypFile : FypFile;
  }
  