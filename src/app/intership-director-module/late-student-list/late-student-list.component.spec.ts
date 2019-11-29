import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateStudentListComponent } from './late-student-list.component';

describe('LateStudentListComponent', () => {
  let component: LateStudentListComponent;
  let fixture: ComponentFixture<LateStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
