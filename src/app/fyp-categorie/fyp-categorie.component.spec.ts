import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypCategorieComponent } from './fyp-categorie.component';

describe('FypCategorieComponent', () => {
  let component: FypCategorieComponent;
  let fixture: ComponentFixture<FypCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
