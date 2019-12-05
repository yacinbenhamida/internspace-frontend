import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FYPDefenseComponent } from './fypdefense.component';

describe('FYPDefenseComponent', () => {
  let component: FYPDefenseComponent;
  let fixture: ComponentFixture<FYPDefenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FYPDefenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FYPDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
