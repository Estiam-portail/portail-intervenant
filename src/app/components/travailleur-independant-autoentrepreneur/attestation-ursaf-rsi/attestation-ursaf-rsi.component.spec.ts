import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationUrsafRsiComponent } from './attestation-ursaf-rsi.component';

describe('AttestationUrsafRsiComponent', () => {
  let component: AttestationUrsafRsiComponent;
  let fixture: ComponentFixture<AttestationUrsafRsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttestationUrsafRsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationUrsafRsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
