import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetsManagementComponent } from './sheets-management.component';

describe('SheetsManagementComponent', () => {
  let component: SheetsManagementComponent;
  let fixture: ComponentFixture<SheetsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
