import { Student } from './../../users/student';
import { FypCategory } from './../../fyp/fyp-category';
export interface StudentCategoryPreference {
  id?: number;
  skillScore?: number;
  student?: Student;
  category?: FypCategory;
}
