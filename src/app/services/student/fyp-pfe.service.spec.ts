import { TestBed } from '@angular/core/testing';

import { FypPFEService } from './fyp-pfe.service';

describe('FypPFEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FypPFEService = TestBed.get(FypPFEService);
    expect(service).toBeTruthy();
  });
});
