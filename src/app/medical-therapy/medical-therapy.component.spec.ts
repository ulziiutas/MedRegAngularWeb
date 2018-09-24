import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTherapyComponent } from './medical-therapy.component';

describe('MedicalTherapyComponent', () => {
  let component: MedicalTherapyComponent;
  let fixture: ComponentFixture<MedicalTherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalTherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
