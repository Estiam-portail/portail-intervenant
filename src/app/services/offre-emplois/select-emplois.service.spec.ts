import { TestBed } from '@angular/core/testing';

import { SelectEmploisService } from './select-emplois.service';

describe('SelectEmploisService', () => {
  let service: SelectEmploisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectEmploisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
