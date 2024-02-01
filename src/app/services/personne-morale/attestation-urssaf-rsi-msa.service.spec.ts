import { TestBed } from '@angular/core/testing';

import { AttestationURSSAFRSIMSAService } from './attestation-urssaf-rsi-msa.service';

describe('AttestationURSSAFRSIMSAService', () => {
  let service: AttestationURSSAFRSIMSAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttestationURSSAFRSIMSAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
