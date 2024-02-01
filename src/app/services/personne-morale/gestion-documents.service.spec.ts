import { TestBed } from '@angular/core/testing';

import { GestionDocumentsService } from './gestion-documents.service';

describe('GestionDocumentsService', () => {
  let service: GestionDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
