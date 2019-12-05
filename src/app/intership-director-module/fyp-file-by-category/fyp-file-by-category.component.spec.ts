import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypFileByCategoryComponent } from './fyp-file-by-category.component';

describe('FypFileByCategoryComponent', () => {
  let component: FypFileByCategoryComponent;
  let fixture: ComponentFixture<FypFileByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypFileByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypFileByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
