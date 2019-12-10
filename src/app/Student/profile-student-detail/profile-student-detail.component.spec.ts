import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStudentDetailComponent } from './profile-student-detail.component';

describe('ProfileStudentDetailComponent', () => {
  let component: ProfileStudentDetailComponent;
  let fixture: ComponentFixture<ProfileStudentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStudentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
