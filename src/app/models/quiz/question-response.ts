import { QuizQuestion } from './quiz-question';
export interface QuestionResponse {
  id?: any;
  isCorrect?: Boolean;
  content?: String;
  question?: QuizQuestion;
  //
}
