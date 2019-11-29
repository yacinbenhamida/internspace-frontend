import { Department } from "./department"
import { FypFile } from "./fyp/fyp-file"

export class User{
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
    hasSubmittedAReport: Boolean
    cin: String
    passGenerated: String
    isCreated: Boolean
    isSaved: Boolean
    isAutorised: Boolean
    isDisabled: Boolean
    fypFile: FypFile
    constructor(){
        
    }
}