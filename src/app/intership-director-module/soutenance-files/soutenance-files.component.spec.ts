import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenanceFilesComponent } from './soutenance-files.component';

describe('SoutenanceFilesComponent', () => {
  let component: SoutenanceFilesComponent;
  let fixture: ComponentFixture<SoutenanceFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoutenanceFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutenanceFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
