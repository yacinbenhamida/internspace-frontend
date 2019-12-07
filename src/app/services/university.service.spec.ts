import { TestBed } from '@angular/core/testing';

import { UniversityService } from './university.service';

describe('UniversityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversityService = TestBed.get(UniversityService);
    expect(service).toBeTruthy();
  });
});
