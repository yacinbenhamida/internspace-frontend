import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipCComponent } from './intership-c.component';

describe('IntershipCComponent', () => {
  let component: IntershipCComponent;
  let fixture: ComponentFixture<IntershipCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntershipCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershipCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
