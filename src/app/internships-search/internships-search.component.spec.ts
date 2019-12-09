import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipsSearchComponent } from './internships-search.component';

describe('InternshipsSearchComponent', () => {
  let component: InternshipsSearchComponent;
  let fixture: ComponentFixture<InternshipsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
