import { TestBed } from '@angular/core/testing';

import { InternshipDirectorService } from './internship-director.service';

describe('InternshipDirectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternshipDirectorService = TestBed.get(InternshipDirectorService);
    expect(service).toBeTruthy();
  });
});
