import { TestBed } from '@angular/core/testing';

import { OrganismeFormationService } from './organisme-formation.service';

describe('OrganismeFormationService', () => {
  let service: OrganismeFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganismeFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
