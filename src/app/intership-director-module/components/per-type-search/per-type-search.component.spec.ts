import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerTypeSearchComponent } from './per-type-search.component';

describe('PerTypeSearchComponent', () => {
  let component: PerTypeSearchComponent;
  let fixture: ComponentFixture<PerTypeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerTypeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerTypeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
