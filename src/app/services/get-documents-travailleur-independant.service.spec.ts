import { TestBed } from '@angular/core/testing';

import { GetDocumentsTravailleurIndependantService } from './get-documents-travailleur-independant.service';

describe('GetDocumentsTravailleurIndependantService', () => {
  let service: GetDocumentsTravailleurIndependantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDocumentsTravailleurIndependantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
