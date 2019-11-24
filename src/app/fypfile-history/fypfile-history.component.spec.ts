import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypfileHistoryComponent } from './fypfile-history.component';

describe('FypfileHistoryComponent', () => {
  let component: FypfileHistoryComponent;
  let fixture: ComponentFixture<FypfileHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypfileHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypfileHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
