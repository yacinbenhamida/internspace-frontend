import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipCreateComponent } from './intership-create.component';

describe('IntershipCreateComponent', () => {
  let component: IntershipCreateComponent;
  let fixture: ComponentFixture<IntershipCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntershipCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershipCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
