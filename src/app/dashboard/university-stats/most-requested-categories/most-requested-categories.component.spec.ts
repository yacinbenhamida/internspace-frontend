import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRequestedCategoriesComponent } from './most-requested-categories.component';

describe('MostRequestedCategoriesComponent', () => {
  let component: MostRequestedCategoriesComponent;
  let fixture: ComponentFixture<MostRequestedCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRequestedCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRequestedCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
