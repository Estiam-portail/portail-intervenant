import { TestBed } from '@angular/core/testing';

import { RibIbanBicService } from './rib-iban-bic.service';

describe('RibIbanBicService', () => {
  let service: RibIbanBicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RibIbanBicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
