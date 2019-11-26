import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypConventionSComponent } from './fyp-convention-s.component';

describe('FypConventionSComponent', () => {
  let component: FypConventionSComponent;
  let fixture: ComponentFixture<FypConventionSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypConventionSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypConventionSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
