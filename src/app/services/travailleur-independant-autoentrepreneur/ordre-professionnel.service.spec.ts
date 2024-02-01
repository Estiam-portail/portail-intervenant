import { TestBed } from '@angular/core/testing';

import { OrdreProfessionnelService } from './ordre-professionnel.service';

describe('OrdreProfessionnelService', () => {
  let service: OrdreProfessionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdreProfessionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
