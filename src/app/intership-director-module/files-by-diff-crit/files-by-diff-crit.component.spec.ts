import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesByDiffCritComponent } from './files-by-diff-crit.component';

describe('FilesByDiffCritComponent', () => {
  let component: FilesByDiffCritComponent;
  let fixture: ComponentFixture<FilesByDiffCritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesByDiffCritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesByDiffCritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
