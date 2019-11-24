import { TestBed } from '@angular/core/testing';

import { UniStatsService } from './uni-stats.service';

describe('UniStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniStatsService = TestBed.get(UniStatsService);
    expect(service).toBeTruthy();
  });
});
