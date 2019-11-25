import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypFileComponent } from './fyp-file.component';

describe('FypFileComponent', () => {
  let component: FypFileComponent;
  let fixture: ComponentFixture<FypFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
