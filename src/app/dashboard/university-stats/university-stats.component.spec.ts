import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityStatsComponent } from './university-stats.component';

describe('UniversityStatsComponent', () => {
  let component: UniversityStatsComponent;
  let fixture: ComponentFixture<UniversityStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
