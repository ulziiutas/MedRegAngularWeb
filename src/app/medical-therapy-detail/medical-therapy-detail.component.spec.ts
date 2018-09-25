import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTherapyDetailComponent } from './medical-therapy-detail.component';

describe('MedicalTherapyDetailComponent', () => {
  let component: MedicalTherapyDetailComponent;
  let fixture: ComponentFixture<MedicalTherapyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalTherapyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalTherapyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
