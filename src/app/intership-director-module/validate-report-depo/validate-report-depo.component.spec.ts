import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateReportDepoComponent } from './validate-report-depo.component';

describe('ValidateReportDepoComponent', () => {
  let component: ValidateReportDepoComponent;
  let fixture: ComponentFixture<ValidateReportDepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateReportDepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateReportDepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
