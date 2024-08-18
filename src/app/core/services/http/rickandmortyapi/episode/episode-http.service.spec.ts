import { TestBed } from '@angular/core/testing';

import { EpisodeHttpService } from './episode-http.service';

describe('EpisodeHttpService', () => {
  let service: EpisodeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
