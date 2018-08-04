import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationfeesComponent } from './medicationfees.component';

describe('MedicationfeesComponent', () => {
  let component: MedicationfeesComponent;
  let fixture: ComponentFixture<MedicationfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
