import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadEvolutionPerYearComponent } from './abroad-evolution-per-year.component';

describe('AbroadEvolutionPerYearComponent', () => {
  let component: AbroadEvolutionPerYearComponent;
  let fixture: ComponentFixture<AbroadEvolutionPerYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbroadEvolutionPerYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbroadEvolutionPerYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
