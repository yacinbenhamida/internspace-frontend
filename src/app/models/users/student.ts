import { FypConvention } from "../fyp/fyp-convention";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  cin: string;
  email: string;
  birthDate: Date
  hasSubmittedAReport: boolean;
  hasSubmittedAreport: boolean;
  isAutorised: boolean;
  isCreated: boolean;
  isDisabled: boolean;
  isSaved: boolean;
  passGenerated: null;
  password: string;
  userType: string;
  username: string;
  fypFile: any;
  inter:FypConvention;
}
