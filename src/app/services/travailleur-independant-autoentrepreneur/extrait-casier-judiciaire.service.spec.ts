import { TestBed } from '@angular/core/testing';

import { ExtraitCasierJudiciaireService } from './extrait-casier-judiciaire.service';

describe('ExtraitCasierJudiciaireService', () => {
  let service: ExtraitCasierJudiciaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraitCasierJudiciaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
