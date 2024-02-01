import { TestBed } from '@angular/core/testing';

import { AttestationPrecisantService } from './attestation-precisant.service';

describe('AttestationPrecisantService', () => {
  let service: AttestationPrecisantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttestationPrecisantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
