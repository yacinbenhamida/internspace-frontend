import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypConventionComponent } from './fyp-convention.component';

describe('FypConventionComponent', () => {
  let component: FypConventionComponent;
  let fixture: ComponentFixture<FypConventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypConventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypConventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
