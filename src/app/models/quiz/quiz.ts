import { QuizQuestion } from './quiz-question';
import { FypCategory } from './../fyp/fyp-category';
export interface Quiz {
  id?: number;
  title?: String;
  description?: String;
  category?: FypCategory;
  questions?: QuizQuestion[];
  requiredMinLevel?: number;
  minCorrectQuestionsPercentage?: number;
  iconUrl?: string;
}
