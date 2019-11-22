import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypTemplateManagementComponent } from './fyp-template-management.component';

describe('FypTemplateManagementComponent', () => {
  let component: FypTemplateManagementComponent;
  let fixture: ComponentFixture<FypTemplateManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypTemplateManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypTemplateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
