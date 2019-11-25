import { TestBed } from '@angular/core/testing';

import { FypConventionService } from './fyp-convention.service';

describe('FypConventionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FypConventionService = TestBed.get(FypConventionService);
    expect(service).toBeTruthy();
  });
});
