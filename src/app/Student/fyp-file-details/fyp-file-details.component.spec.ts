import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypFileDetailsComponent } from './fyp-file-details.component';

describe('FypFileDetailsComponent', () => {
  let component: FypFileDetailsComponent;
  let fixture: ComponentFixture<FypFileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypFileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypFileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
