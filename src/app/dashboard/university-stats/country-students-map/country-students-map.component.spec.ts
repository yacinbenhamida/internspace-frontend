import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStudentsMapComponent } from './country-students-map.component';

describe('CountryStudentsMapComponent', () => {
  let component: CountryStudentsMapComponent;
  let fixture: ComponentFixture<CountryStudentsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryStudentsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStudentsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
