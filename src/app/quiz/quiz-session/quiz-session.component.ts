import { StudentQuizResponse } from './../../models/quiz/student/student-quiz-response';
import { QuizQuestion } from './../../models/quiz/quiz-question';
import { StudentQuiz } from './../../models/quiz/student/student-quiz';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuizService } from './../../services/quiz/quiz.service';
import { UniStatsService } from './../../services/dashboard/uni-stats.service';
import { AuthenticationService } from './../../services/security/authentication.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export interface UserQuizSessionInfo {
  question?: QuizQuestion;
  responses?: StudentQuizResponse[];
  bIsLastQuestion?: boolean;
  bIsFirstQuestion?: boolean;
}

export class CountdownInfo {
  bCounterStarted = false;
  timeLeft = 10; // in seconds
  time = 0;
  minutes = 0;
  seconds = 0;
  private bIsStarted = false;

  owner?: QuizSessionComponent;

  start(owner: QuizSessionComponent) {
    this.owner = owner;

    if (this.bIsStarted) {
      return;
    }

    this.bIsStarted = true;
    this.bCounterStarted = true;

    this.time--;
    let distance = (this.timeLeft + this.time) * 1000;
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timer = setInterval(() => {


      this.time--;
      distance = (this.timeLeft + this.time) * 1000;
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (this.timeLeft + this.time <= 0) {
        clearInterval(timer);
        this.owner.onClick_FinishQuestion();
      }



    }, 1000);

  }
}

@Component({
  selector: 'app-quiz-session',
  templateUrl: './quiz-session.component.html',
  styleUrls: ['./quiz-session.component.css']
})
export class QuizSessionComponent implements OnInit {

  // Transient
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  // Properties

  userQuiz: StudentQuiz;
  qrMap: any;
  done = 'no';

  // Session Instance
  info: UserQuizSessionInfo;

  // Clock
  countDownInfo: CountdownInfo;

  constructor(
    private _formBuilder: FormBuilder,
    public auth: AuthenticationService,
    private uniStatsService: UniStatsService,
    private quizService: QuizService,
    private router: Router,
    public inModalService: NgbModal,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.info = {};
    this.countDownInfo = new CountdownInfo();

    this.route.params.subscribe(
      data => {
        this.quizService.GetOrCreateStudentQuiz(this.auth.currentUserValue.id, data[0]).subscribe(userQuiz => {

          this.userQuiz = userQuiz;
          this.quizService.GetStudentQuizQuestionResponseMap(this.auth.currentUserValue.id, this.userQuiz.quiz.id).subscribe(e => {

            this.qrMap = e;
            this.refreshQuestionResponses(this.userQuiz.currentQuestionIndex);

            this.countDownInfo.start(this);
          });

        });
      }
    );

  }

  refreshQuestionResponses(questionIndex: number) {
    console.log('qrMap');
    console.log(this.qrMap);
    this.info.question = this.userQuiz.quiz.questions[questionIndex];
    this.info.responses = this.qrMap[this.info.question.id];
    console.log(this.info.responses);

  }

  public onClick_FinishQuestion() {
    this.quizService.RefreshStudentQuizScore(this.auth.currentUserValue.id, this.userQuiz.quiz.id).subscribe(e => {
      console.log(e);

      this.router.navigate(['/student/quiz/result', { 0: this.userQuiz.quiz.id }]);
    });
    //
  }

  onClick_NextQuestion() {
    const newIndex = this.userQuiz.currentQuestionIndex + 1;
    if (newIndex > this.userQuiz.quiz.questions.length - 1) {
      console.log('No more questions for this quiz.');
      return;
    }

    this.userQuiz.currentQuestionIndex = newIndex;
    this.refreshQuestionResponses(newIndex);

    this.info.bIsFirstQuestion = newIndex <= 0;
    this.info.bIsLastQuestion = newIndex + 1 >= this.userQuiz.quiz.questions.length;
  }

  onClick_PreviousQuestion() {
    const newIndex = this.userQuiz.currentQuestionIndex - 1;
    if (newIndex < 0) {
      console.log('No previous questions for this quiz.');
      return;
    }

    this.userQuiz.currentQuestionIndex = newIndex;
    this.refreshQuestionResponses(newIndex);

    this.info.bIsFirstQuestion = newIndex <= 0;
    this.info.bIsLastQuestion = false;
  }

  OnChange_SetResponseCheck(respIndex: number, event: any) {
    console.log(this.auth.currentUserValue);

    const toCheck = event.checked;
    this.info.responses[respIndex].isChecked = toCheck;

    console.log(this.info.responses[respIndex]);

    this.quizService.UpdateUserQuestionResponse(
      this.auth.currentUserValue.id,
      this.info.responses[respIndex].response.id,
      toCheck)
      .subscribe(e => console.log(e));
  }

  get progress() {
    return (this.userQuiz.currentQuestionIndex / (this.userQuiz.quiz.questions.length - 1)) * 100;
  }

  getResponseByIndex(index: number) {
    return this.info.responses[index].isChecked;
  }

}
