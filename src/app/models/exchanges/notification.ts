import { User } from "../User"

export class Notification{
    id? : number
    content? : string
    seen? : boolean 

    sender?: User
    reciever? : User
    dateOfEmission? : any
}