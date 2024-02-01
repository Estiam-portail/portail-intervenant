import { TestBed } from '@angular/core/testing';

import { CopieExtraitService } from './copie-extrait.service';

describe('CopieExtraitService', () => {
  let service: CopieExtraitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopieExtraitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
