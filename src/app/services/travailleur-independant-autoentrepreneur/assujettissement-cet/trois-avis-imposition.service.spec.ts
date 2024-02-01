import { TestBed } from '@angular/core/testing';

import { TroisAvisImpositionService } from './trois-avis-imposition.service';

describe('TroisAvisImpositionService', () => {
  let service: TroisAvisImpositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TroisAvisImpositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
