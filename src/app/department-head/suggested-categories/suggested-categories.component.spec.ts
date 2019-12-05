import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedCategoriesComponent } from './suggested-categories.component';

describe('SuggestedCategoriesComponent', () => {
  let component: SuggestedCategoriesComponent;
  let fixture: ComponentFixture<SuggestedCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
