import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PFECategoryComponent } from './pfecategory.component';

describe('PFECategoryComponent', () => {
  let component: PFECategoryComponent;
  let fixture: ComponentFixture<PFECategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PFECategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PFECategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
