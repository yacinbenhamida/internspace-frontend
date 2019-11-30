import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypFileManagementComponent } from './fyp-file-management.component';

describe('FypFileManagementComponent', () => {
  let component: FypFileManagementComponent;
  let fixture: ComponentFixture<FypFileManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypFileManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypFileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
