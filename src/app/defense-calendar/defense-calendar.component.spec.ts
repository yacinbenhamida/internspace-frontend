import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseCalendarComponent } from './defense-calendar.component';

describe('DefenseCalendarComponent', () => {
  let component: DefenseCalendarComponent;
  let fixture: ComponentFixture<DefenseCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefenseCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefenseCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
