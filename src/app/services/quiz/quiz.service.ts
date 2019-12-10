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

  GetStudentQuizQuestionResponseMap(studentId: number, quizId: number) {
    // 	@Path("/student/quiz/responses-map/")
    const params = new HttpParams()
      .set('student', studentId.toString())
      .set('quiz', quizId.toString());

    return this.http.get<any>(
      this.baseurl + '/student/quiz/responses-map',
      { headers: this.headersJSON, params: params });
  }

  UpdateCurrentIndexQuestion(userQuestionId: number) {

  }

  UpdateUserQuestionResponse(studentId: any, responseId: any, toCheck: boolean) {
    const params = new HttpParams()
      .set('student', studentId.toString())
      .set('response', responseId.toString())
      .set('check', toCheck ? 'true' : 'false');

    // from post to get
    return this.http.get<any>(
      this.baseurl + '/student/answer',
      { headers: this.headersJSON, params: params });
  }

  RefreshStudentQuizScore(studentId: number, quizId: number) {
    const params = new HttpParams()
    .set('student', studentId.toString())
    .set('quiz', quizId.toString());

    // from post to get
    return this.http.get<any>(
      this.baseurl + '/student/finish-quiz',
      { headers: this.headersJSON, params: params });
  }
}
