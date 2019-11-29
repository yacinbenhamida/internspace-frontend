import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypPFECreateComponent } from './fyp-pfecreate.component';

describe('FypPFECreateComponent', () => {
  let component: FypPFECreateComponent;
  let fixture: ComponentFixture<FypPFECreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypPFECreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypPFECreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
