import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsInternshipByYearLocComponent } from './students-internship-by-year-loc.component';

describe('StudentsInternshipByYearLocComponent', () => {
  let component: StudentsInternshipByYearLocComponent;
  let fixture: ComponentFixture<StudentsInternshipByYearLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsInternshipByYearLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsInternshipByYearLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
