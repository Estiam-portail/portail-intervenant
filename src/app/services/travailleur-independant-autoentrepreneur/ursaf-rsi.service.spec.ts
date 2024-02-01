import { TestBed } from '@angular/core/testing';

import { UrsafRsiService } from './ursaf-rsi.service';

describe('UrsafRsiService', () => {
  let service: UrsafRsiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrsafRsiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
