import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypTemplateElementComponent } from './fyp-template-element.component';

describe('FypTemplateElementComponent', () => {
  let component: FypTemplateElementComponent;
  let fixture: ComponentFixture<FypTemplateElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypTemplateElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypTemplateElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
