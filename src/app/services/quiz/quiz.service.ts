import { StudentQuiz } from './../../models/quiz/student/student-quiz';
import { StudentCategoryPreference } from './../../models/quiz/student/student-category-preference';
import { Quiz } from './../../models/quiz/quiz';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  headers: HttpHeaders;
  headersJSON: HttpHeaders;
  httpOptions: {};

  // Base url
  baseurl = '/api/quiz';

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    this.headersJSON = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      })
    };

  }

  GetAllQuizzesByCategory(categoryId: number): Observable<Quiz[]> {
    const params = new HttpParams()
      .set('category', categoryId.toString());

    return this.http.get<Quiz[]>(this.baseurl + '/all/category', { headers: this.headersJSON, params: params });
  }

  // TODO
  GetQuizByCategoryAndLevel(studentId: number, categoryId: number, quizLevel: number): Observable<StudentQuiz> {
    const params = new HttpParams()
      .set('student', studentId.toString())
      .set('category', categoryId.toString())
      .set('quizLevel', quizLevel.toString());

    return this.http.get<StudentQuiz>(this.baseurl + '/student/quiz', { headers: this.headersJSON, params: params });
  }

  GetOrCreateStudentQuiz(studentId: number, quizId: number): Observable<StudentQuiz> {
    const params = new HttpParams()
      .set('student', studentId.toString())
      .set('quiz', quizId.toString());

    return this.http.get<StudentQuiz>(this.baseurl + '/student/start-quiz', { headers: this.headersJSON, params: params });
  }

  GetOrCreateStudentCategoryPreference(studentId: number, categoryId: number): Observable<StudentCategoryPreference> {
    const params = new HttpParams()
      .set('student', studentId.toString())
      .set('category', categoryId.toString());

    return this.http.get<StudentCategoryPreference>(
      this.baseurl + '/student/categories/preferences',
      { headers: this.headersJSON, params: params });
  }
}
