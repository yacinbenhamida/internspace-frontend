import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizSessionComponent } from './quiz-session/quiz-session.component';
import { QuizSessionElementComponent } from './quiz-session-element/quiz-session-element.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { QuizResultComponent } from './quiz-result/quiz-result.component';



@NgModule({
  declarations: [QuizSelectionComponent, QuizSessionComponent, QuizSessionElementComponent, QuizResultComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatProgressSpinnerModule,
    NgbModule,
    MatCheckboxModule,
    MatProgressBarModule
  ]
})
export class QuizModule { }
