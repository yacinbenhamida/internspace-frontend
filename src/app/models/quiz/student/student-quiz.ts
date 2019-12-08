import { Student } from './../../users/student';
import { Quiz } from './../quiz';
export interface StudentQuiz {
  id?: number;
  student?: Student;
  quiz?: Quiz;
  score?: number;
  currentQuestionIndex?: number;
}
