import { TestBed } from '@angular/core/testing';

import { AttestationAssuranceRCService } from './attestation-assurance-rc.service';

describe('AttestationAssuranceRCService', () => {
  let service: AttestationAssuranceRCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttestationAssuranceRCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
