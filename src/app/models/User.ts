import { FypFile } from 'src/app/models/fyp/fyp-file';
import { FypCategory } from './fyp/fyp-category';
import { Department } from "./department"

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

    // Student Related Section
    hasSubmittedAreport: boolean;
    // password: string;
    fypFile: FypFile;
    preferedCategories: FypCategory[];

    constructor(){

    }
}
