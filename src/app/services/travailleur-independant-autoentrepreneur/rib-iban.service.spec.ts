import { TestBed } from '@angular/core/testing';

import { RibIbanService } from './rib-iban.service';

describe('RibIbanService', () => {
  let service: RibIbanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RibIbanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
