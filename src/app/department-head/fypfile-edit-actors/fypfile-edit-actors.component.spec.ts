import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypfileEditActorsComponent } from './fypfile-edit-actors.component';

describe('FypfileEditActorsComponent', () => {
  let component: FypfileEditActorsComponent;
  let fixture: ComponentFixture<FypfileEditActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypfileEditActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypfileEditActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
