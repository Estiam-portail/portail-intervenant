import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationURSSAFRSIMSAComponent } from './attestation-urssaf-rsi-msa.component';

describe('AttestationURSSAFRSIMSAComponent', () => {
  let component: AttestationURSSAFRSIMSAComponent;
  let fixture: ComponentFixture<AttestationURSSAFRSIMSAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttestationURSSAFRSIMSAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationURSSAFRSIMSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
