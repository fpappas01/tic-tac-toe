import { TestBed } from '@angular/core/testing';

import { MinmaxService } from './minmax.service';

describe('MinmaxService', () => {
  let service: MinmaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinmaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
