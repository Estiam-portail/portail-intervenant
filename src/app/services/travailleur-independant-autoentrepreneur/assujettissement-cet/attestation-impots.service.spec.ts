import { TestBed } from '@angular/core/testing';

import { AttestationImpotsService } from './attestation-impots.service';

describe('AttestationImpotsService', () => {
  let service: AttestationImpotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttestationImpotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
