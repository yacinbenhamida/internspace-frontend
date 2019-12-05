import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypPFEUpdateComponent } from './fyp-pfeupdate.component';

describe('FypPFEUpdateComponent', () => {
  let component: FypPFEUpdateComponent;
  let fixture: ComponentFixture<FypPFEUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypPFEUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypPFEUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
