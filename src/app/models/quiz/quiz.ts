import { QuizQuestion } from './quiz-question';
import { FypCategory } from './../fyp/fyp-category';
export interface Quiz {
  id?: Number;
  title?: String;
  description?: String;
  category?: FypCategory;
  questions?: QuizQuestion[];
  requiredMinLevel?: number;
  minCorrectQuestionsPercentage?: Number;
}
