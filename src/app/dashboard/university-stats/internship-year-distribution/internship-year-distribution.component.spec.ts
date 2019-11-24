import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipYearDistributionComponent } from './internship-year-distribution.component';

describe('InternshipYearDistributionComponent', () => {
  let component: InternshipYearDistributionComponent;
  let fixture: ComponentFixture<InternshipYearDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipYearDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipYearDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
