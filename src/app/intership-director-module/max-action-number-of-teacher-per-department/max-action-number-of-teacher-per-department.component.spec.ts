import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxActionNumberOfTeacherPerDepartmentComponent } from './max-action-number-of-teacher-per-department.component';

describe('MaxActionNumberOfTeacherPerDepartmentComponent', () => {
  let component: MaxActionNumberOfTeacherPerDepartmentComponent;
  let fixture: ComponentFixture<MaxActionNumberOfTeacherPerDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxActionNumberOfTeacherPerDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxActionNumberOfTeacherPerDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
