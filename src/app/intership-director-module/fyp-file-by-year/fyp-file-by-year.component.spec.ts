import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypFileByYearComponent } from './fyp-file-by-year.component';

describe('FypFileByYearComponent', () => {
  let component: FypFileByYearComponent;
  let fixture: ComponentFixture<FypFileByYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypFileByYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypFileByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
