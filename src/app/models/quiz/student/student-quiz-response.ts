import { QuestionResponse } from './../question-response';
import { User } from 'src/app/models/User';

export interface StudentQuizResponse {
  id?: number;
  student?: User; // As a student...
  response?: QuestionResponse;
  isChecked?: boolean;
}
