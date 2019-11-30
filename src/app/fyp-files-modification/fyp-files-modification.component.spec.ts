import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypFilesModificationComponent } from './fyp-files-modification.component';

describe('FypFilesModificationComponent', () => {
  let component: FypFilesModificationComponent;
  let fixture: ComponentFixture<FypFilesModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypFilesModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypFilesModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
