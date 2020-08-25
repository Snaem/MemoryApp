import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicothequeComponent } from './musicotheque.component';

describe('MusicothequeComponent', () => {
  let component: MusicothequeComponent;
  let fixture: ComponentFixture<MusicothequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicothequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
