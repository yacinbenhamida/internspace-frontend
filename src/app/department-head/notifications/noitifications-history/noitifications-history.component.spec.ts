import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoitificationsHistoryComponent } from './noitifications-history.component';

describe('NoitificationsHistoryComponent', () => {
  let component: NoitificationsHistoryComponent;
  let fixture: ComponentFixture<NoitificationsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoitificationsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoitificationsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
