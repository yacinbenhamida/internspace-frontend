import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavcategorieComponent } from './favcategorie.component';

describe('FavcategorieComponent', () => {
  let component: FavcategorieComponent;
  let fixture: ComponentFixture<FavcategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
