import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypFileByCountryComponent } from './fyp-file-by-country.component';

describe('FypFileByCountryComponent', () => {
  let component: FypFileByCountryComponent;
  let fixture: ComponentFixture<FypFileByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypFileByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypFileByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
