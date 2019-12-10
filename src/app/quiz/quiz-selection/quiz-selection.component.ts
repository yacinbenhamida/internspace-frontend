import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { StudentQuiz } from './../../models/quiz/student/student-quiz';
import { StudentCategoryPreference } from './../../models/quiz/student/student-category-preference';
import { Quiz } from './../../models/quiz/quiz';
import { QuizService } from './../../services/quiz/quiz.service';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FypCategory } from './../../models/fyp/fyp-category';
import { UniStatsService } from './../../services/dashboard/uni-stats.service';
import { AuthenticationService } from './../../services/security/authentication.service';
import { Component, OnInit } from '@angular/core';

export interface CategoryDisplayGroup {
  id: number;
  name: String;
}

export interface QuizSelectionInfo {
  status: string;
  title?: string;
  categoryPreference?: StudentCategoryPreference;
  userQuiz?: StudentQuiz; // Change to UserQuiz type?
  quizzesList?: Quiz[];
  quiz?: Quiz;
  maxLevel?: number;
  bClickedOnHigherLevelQuiz?: boolean;
  bIsAchieved?: boolean;
}

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {

  categories: FypCategory[];
  categoryDisplays: CategoryDisplayGroup[];
  categoryDisplaysGroupOptions: Observable<CategoryDisplayGroup[]>;

  categoryForm: FormGroup = this._formBuilder.group({
    categoryGroup: new FormControl('', [Validators.required]),
    startBtn: new FormControl(''),
  });

  // Loading Quiz Section
  bIsLoadingQuizzes: boolean;
  bIsLoadingUserQuiz: boolean;
  quizSelectionInfo: QuizSelectionInfo;
  modalService: NgbModal;

  constructor(
    private _formBuilder: FormBuilder,
    public auth: AuthenticationService,
    private uniStatsService: UniStatsService,
    private quizService: QuizService,
    private router: Router,
    public inModalService: NgbModal
  ) {
    this.modalService = inModalService;

  }
  ngOnInit() {
    this.bIsLoadingQuizzes = true;
    this.quizSelectionInfo = { status: 'none' };

    this.uniStatsService.GetCategories().subscribe(e => {

      this.categories = e;
      this.categoryDisplays = [];

      for (let i = 0; i < this.categories.length; ++i) {

        if (!this.categories[i]) {
          continue;
        }

        this.categoryDisplays.push({ id: e[i].id, name: e[i].name });
      }

      // tslint:disable-next-line: no-non-null-assertion
      this.categoryDisplaysGroupOptions = this.categoryForm.get('categoryGroup')!.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterGroup(value))
        );

      this.bIsLoadingQuizzes = false;
    });
  }

  onClick_CategoryId(categoryId: number) {
    this.bIsLoadingQuizzes = true;
    // Load...
    this.quizSelectionInfo.bClickedOnHigherLevelQuiz = false;
    this.quizSelectionInfo.userQuiz = null;

    this.quizService.GetOrCreateStudentCategoryPreference(this.auth.currentUserValue.id, categoryId).subscribe(
      e => {
        this.quizSelectionInfo.categoryPreference = e;
      }
    );


    this.quizService.GetAllQuizzesByCategory(categoryId).subscribe(e => {
      this.quizSelectionInfo.quizzesList = e;

      let max = 1;
      for (const elem of e) {
        max = max < elem.requiredMinLevel + 1 ? elem.requiredMinLevel + 1 : max;
      }

      this.quizSelectionInfo.maxLevel = max;

      this.bIsLoadingQuizzes = false;
    });

    // Check if it's required or not.
  }

  onClick_QuizSelect(quiz: Quiz) {

    this.quizSelectionInfo.quiz = quiz;

    if (!this.quizSelectionInfo.quiz) {
      return;
    }
    /*
    this.quizService.GetQuizByCategoryAndLevel(this.auth.currentUserValue.id, quiz.category.id, 3).subscribe(e => {
      console.log(e);
      this.quizSelectionInfo.userQuiz = e;
    });
    */

    this.quizSelectionInfo.bClickedOnHigherLevelQuiz = false;
    this.bIsLoadingUserQuiz = true;

    this.quizService.GetOrCreateStudentQuiz(this.auth.currentUserValue.id, quiz.id).subscribe(e => {
      this.quizSelectionInfo.userQuiz = e;

      this.quizSelectionInfo.bClickedOnHigherLevelQuiz =
        this.quizSelectionInfo.quiz.requiredMinLevel > this.quizSelectionInfo.categoryPreference.skillScore;

      this.quizSelectionInfo.bIsAchieved =
        this.quizSelectionInfo.userQuiz.score >= this.quizSelectionInfo.quiz.minCorrectQuestionsPercentage;

      this.bIsLoadingUserQuiz = false;
    });


    // Find user quiz with relevant one and show it.
  }

  onSumbit_GoToQuizSession() {
    const val = this.categoryForm.value;
    this.router.navigate(['/student/quiz/session', { 0: this.quizSelectionInfo.userQuiz.quiz.id }] );
  }

  isUserQuizValid() {
    if (!this.quizSelectionInfo.userQuiz) {
      return false;
    }

    // Check if our skill in the current category is enough to start this quiz.
    if (this.quizSelectionInfo.quiz.requiredMinLevel > this.quizSelectionInfo.categoryPreference.skillScore) {
      console.log(this.quizSelectionInfo.quiz.requiredMinLevel + '> ' + this.quizSelectionInfo.categoryPreference.skillScore);
      alert('You can\'t do that!');
      return;
    }
  }

  get categoryGroup() {
    return this.categoryForm.get('categoryGroup');
  }

  private _filterGroup(value: string): CategoryDisplayGroup[] {
    if (value) {
      return this.categoryDisplays
        .map(group => ({ id: group.id, name: group.name }))
        .filter(group => group.name.toLowerCase().includes(value.toLowerCase()));
    }

    return this.categoryDisplays;
  }

}
