import { TestBed } from '@angular/core/testing';

import { ScalesService } from './scales.service';

describe('ScalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScalesService = TestBed.get(ScalesService);
    expect(service).toBeTruthy();
  });
});
