import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypfilesOperationsComponent } from './fypfiles-operations.component';

describe('FypfilesOperationsComponent', () => {
  let component: FypfilesOperationsComponent;
  let fixture: ComponentFixture<FypfilesOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypfilesOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypfilesOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
