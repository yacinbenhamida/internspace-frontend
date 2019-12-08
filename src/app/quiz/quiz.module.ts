import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizSessionComponent } from './quiz-session/quiz-session.component';
import { QuizSessionElementComponent } from './quiz-session-element/quiz-session-element.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [QuizSelectionComponent, QuizSessionComponent, QuizSessionElementComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class QuizModule { }
