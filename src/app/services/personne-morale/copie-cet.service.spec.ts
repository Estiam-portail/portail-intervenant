import { TestBed } from '@angular/core/testing';

import { CopieCetService } from './copie-cet.service';

describe('CopieCetService', () => {
  let service: CopieCetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopieCetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
