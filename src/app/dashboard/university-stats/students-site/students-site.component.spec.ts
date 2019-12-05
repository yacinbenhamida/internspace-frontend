import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSiteComponent } from './students-site.component';

describe('StudentsSiteComponent', () => {
  let component: StudentsSiteComponent;
  let fixture: ComponentFixture<StudentsSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
