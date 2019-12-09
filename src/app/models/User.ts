import { FypCategory } from './fyp/fyp-category';
import { Department } from "./department"
import { FypFile } from "./fyp/fyp-file"
import { StudyClass } from './studyClass';
import { FypIntervention } from './fyp/fyp-intervention';
import { Company } from './users/Company';

export class User {

  // Shared with different users
  id?: number
  firstName?: string
  lastName?: string
  email?: string
  username?: string
  role?: string
  userType?: string
  token?: string
  birthDate?: Date
  department?: Department;
  hasSubmittedAReport?: Boolean;
  cin?: String;
  passGenerated?: String;
  isCreated?: Boolean;
  isSaved?: Boolean;
  isAutorised?: Boolean;
  isDisabled?: Boolean;
  studyClass?: StudyClass
  pictureUrl?: String;
  phoneNumber?: String;

  // Student Related Section
  hasSubmittedAreport?: boolean;
  fypFile?: FypFile;
  preferedCategories?: FypCategory[];
  interventions?: FypIntervention[] = [];
  // Student Related Section
  // password: string;
  status?: string

  // Company Related Section
  logoUrl?: String;
  address?: String;
  slogan?: String;
  website?: String;
  description?: String;
  supervisorEmail?: String;
  country?: String;
  // company:Company;
  constructor() {

  }
}
