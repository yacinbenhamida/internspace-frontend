import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipUpdateComponent } from './intership-update.component';

describe('IntershipUpdateComponent', () => {
  let component: IntershipUpdateComponent;
  let fixture: ComponentFixture<IntershipUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntershipUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershipUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
