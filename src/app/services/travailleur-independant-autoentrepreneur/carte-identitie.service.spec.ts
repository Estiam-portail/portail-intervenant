import { TestBed } from '@angular/core/testing';

import { CarteIdentitieService } from './carte-identitie.service';

describe('CarteIdentitieService', () => {
  let service: CarteIdentitieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteIdentitieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
