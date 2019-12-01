import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PFECategoryDetailsComponent } from './pfecategory-details.component';

describe('PFECategoryDetailsComponent', () => {
  let component: PFECategoryDetailsComponent;
  let fixture: ComponentFixture<PFECategoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PFECategoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PFECategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
