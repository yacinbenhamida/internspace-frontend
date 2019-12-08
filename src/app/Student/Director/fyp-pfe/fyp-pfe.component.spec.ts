import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypPFEComponent } from './fyp-pfe.component';

describe('FypPFEComponent', () => {
  let component: FypPFEComponent;
  let fixture: ComponentFixture<FypPFEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypPFEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypPFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
