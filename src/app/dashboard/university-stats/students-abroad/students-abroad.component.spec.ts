import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAbroadComponent } from './students-abroad.component';

describe('StudentsAbroadComponent', () => {
  let component: StudentsAbroadComponent;
  let fixture: ComponentFixture<StudentsAbroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsAbroadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
