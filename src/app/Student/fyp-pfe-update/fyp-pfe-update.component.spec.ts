import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypPfeUpdateComponent } from './fyp-pfe-update.component';

describe('FypPfeUpdateComponent', () => {
  let component: FypPfeUpdateComponent;
  let fixture: ComponentFixture<FypPfeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypPfeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypPfeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
