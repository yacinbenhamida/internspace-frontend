import { QuestionResponse } from './question-response';
import { Quiz } from './quiz';
export interface QuizQuestion {
  id?: number;
  content?: String;
  quiz?: Quiz;
  responses?: QuestionResponse[];
}
