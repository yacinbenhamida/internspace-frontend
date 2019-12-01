import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypfileHistoryCardComponent } from './fypfile-history-card.component';

describe('FypfileHistoryCardComponent', () => {
  let component: FypfileHistoryCardComponent;
  let fixture: ComponentFixture<FypfileHistoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypfileHistoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypfileHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
