import { QuizQuestion } from './quiz-question';
export interface QuestionResponse {
  id?: Number;
  isCorrect?: Boolean;
  content?: String;
  question?: QuizQuestion;
}
