import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetsModificationComponent } from './sheets-modification.component';

describe('SheetsModificationComponent', () => {
  let component: SheetsModificationComponent;
  let fixture: ComponentFixture<SheetsModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetsModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetsModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
