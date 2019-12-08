import { ClassOption } from "./university/class-option";
import { UniversitaryYear } from "./university/universitary-year";

export class StudyClass{
    id:number
    classYear:number // final class year
    universitaryYear:UniversitaryYear
    classOption : ClassOption
    name:string;
    constructor(){
        
    }
}