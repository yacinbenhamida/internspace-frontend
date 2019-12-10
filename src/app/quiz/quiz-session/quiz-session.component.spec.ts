import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSessionComponent } from './quiz-session.component';

describe('QuizSessionComponent', () => {
  let component: QuizSessionComponent;
  let fixture: ComponentFixture<QuizSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
