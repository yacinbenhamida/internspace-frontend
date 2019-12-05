import { User } from "../User";
import { FypFile } from "./fyp-file";

export class FypFileHistory{
	id : number
    editionDate : Date;
	typeOfOperation : string
	editedById : number
	oldCompanyId : number;
	oldState : boolean;
	oldTitle : string;
	oldDescription : string
	oldIssue : string
	oldMailPro : string
	oldMail : string
	changedFile : FypFile
	editionAuthor? : User
	fileOwner? :User
}