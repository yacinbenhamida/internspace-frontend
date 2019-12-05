import { Site } from "./Site"

export class Department{
    id: number
    name: string
    yearOfCreation : Date
    description : string 
    numberOfActionsAllowedForPreValidators: number
    numberOfActionsAllowedForPresidents: number
    numberOfActionsAllowedForProtractors: number
    numberOfActionsAllowedForSupervisors: number
    site: Site
    
}