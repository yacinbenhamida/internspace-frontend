import { TestBed } from '@angular/core/testing';

import { SheetsService } from './sheets.service';

describe('SheetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SheetsService = TestBed.get(SheetsService);
    expect(service).toBeTruthy();
  });
});
