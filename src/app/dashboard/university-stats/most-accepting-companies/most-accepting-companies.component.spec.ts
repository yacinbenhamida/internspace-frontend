import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostAcceptingCompaniesComponent } from './most-accepting-companies.component';

describe('MostAcceptingCompaniesComponent', () => {
  let component: MostAcceptingCompaniesComponent;
  let fixture: ComponentFixture<MostAcceptingCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostAcceptingCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostAcceptingCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
