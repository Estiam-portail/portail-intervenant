import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationAssuranceRCComponent } from './attestation-assurance-rc.component';

describe('AttestationAssuranceRCComponent', () => {
  let component: AttestationAssuranceRCComponent;
  let fixture: ComponentFixture<AttestationAssuranceRCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttestationAssuranceRCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationAssuranceRCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
