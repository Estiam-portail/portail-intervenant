import { TestBed } from '@angular/core/testing';

import { DetailByUidService } from './detail-by-uid.service';

describe('DetailByUidService', () => {
  let service: DetailByUidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailByUidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
