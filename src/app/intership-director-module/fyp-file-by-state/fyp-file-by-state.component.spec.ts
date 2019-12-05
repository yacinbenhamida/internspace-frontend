import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypFileByStateComponent } from './fyp-file-by-state.component';

describe('FypFileByStateComponent', () => {
  let component: FypFileByStateComponent;
  let fixture: ComponentFixture<FypFileByStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypFileByStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypFileByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
