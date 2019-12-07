import { FypCategory } from './fyp/fyp-category';
import { Department } from "./department"
import { FypFile } from "./fyp/fyp-file"
import { StudyClass } from './studyClass';
import { FypIntervention } from './fyp/fyp-intervention';

export class User{

    // Shared with different users
    id : number
    firstName : string
    lastName : string
    email : string
    username : string
    role : string
    userType: string
    token?:string
    birthDate : Date
    department : Department;
    hasSubmittedAReport: Boolean;
    cin: String;
    passGenerated: String;
    isCreated: Boolean;
    isSaved: Boolean;
    isAutorised: Boolean;
    isDisabled: Boolean;
    studyClass:StudyClass
    pictureUrl: String;

    // Student Related Section
    hasSubmittedAreport: boolean;
    // password: string;
    fypFile: FypFile;
    preferedCategories: FypCategory[];
    interventions : FypIntervention[] = [];

    // Company related
    logoUrl: String;
    address: String;
    slogan: String;
    website: String;
    description: String;

    constructor(){

    }
}
