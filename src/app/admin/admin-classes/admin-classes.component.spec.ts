import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassesComponent } from './admin-classes.component';

describe('AdminClassesComponent', () => {
  let component: AdminClassesComponent;
  let fixture: ComponentFixture<AdminClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
