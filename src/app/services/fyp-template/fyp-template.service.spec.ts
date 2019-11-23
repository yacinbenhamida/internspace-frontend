import { TestBed } from '@angular/core/testing';

import { FypTemplateService } from './fyp-template.service';

describe('FypTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FypTemplateService = TestBed.get(FypTemplateService);
    expect(service).toBeTruthy();
  });
});
