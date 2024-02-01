import { TestBed } from '@angular/core/testing';

import { CarteVitaleScService } from './carte-vitale-sc.service';

describe('CarteVitaleScService', () => {
  let service: CarteVitaleScService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteVitaleScService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
