import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcludedfeeComponent } from './concludedfee.component';

describe('ConcludedfeeComponent', () => {
  let component: ConcludedfeeComponent;
  let fixture: ComponentFixture<ConcludedfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcludedfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcludedfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
