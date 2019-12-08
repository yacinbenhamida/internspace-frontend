import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSessionElementComponent } from './quiz-session-element.component';

describe('QuizSessionElementComponent', () => {
  let component: QuizSessionElementComponent;
  let fixture: ComponentFixture<QuizSessionElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSessionElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSessionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
