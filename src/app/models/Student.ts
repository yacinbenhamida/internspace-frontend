import { StudyClass } from "./studyClass"

class Student {
        id?:number
        firstName: String
        lastName: String
        email: String
        username: String
        password: String
        userType: String
        birthDate: Date
        hasSubmittedAReport: Boolean
        cin: String
        passGenerated?: String
        isCreated?: Boolean
        isSaved?: Boolean
        isAutorised?: Boolean
        isDisabled?: Boolean
        studyClass?: StudyClass
        isCanceled?:boolean
}

export default Student;