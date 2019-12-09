import { StudentQuiz } from './../../models/quiz/student/student-quiz';
import { AuthenticationService } from './../../services/security/authentication.service';
import { QuizService } from './../../services/quiz/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  userQuiz: StudentQuiz;
  bIsLoadingUserQuiz = false;

  constructor(
    private router: Router,
    private quizService: QuizService,
    public auth: AuthenticationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bIsLoadingUserQuiz = true;
    this.route.params.subscribe(
      data => {
        this.quizService.GetOrCreateStudentQuiz(this.auth.currentUserValue.id, data[0]).subscribe(userQuiz => {
          this.userQuiz = userQuiz;
          this.loadUpPage();
          this.bIsLoadingUserQuiz = false;
        });
      });

  }

  get bIsAchieved() {
    return this.userQuiz.score >= this.userQuiz.quiz.minCorrectQuestionsPercentage;
  }

  goToQuizSelection() {
    this.router.navigate(['/student/quiz/selection']);
  }

  loadUpPage() {
    // Find user quiz with relevant one and show it.
  }

}
