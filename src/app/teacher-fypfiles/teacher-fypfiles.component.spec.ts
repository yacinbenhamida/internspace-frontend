import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFypfilesComponent } from './teacher-fypfiles.component';

describe('TeacherFypfilesComponent', () => {
  let component: TeacherFypfilesComponent;
  let fixture: ComponentFixture<TeacherFypfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherFypfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFypfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
