import { Department } from "./department"

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
    constructor(){
        
    }
}