import { TestBed } from '@angular/core/testing';

import { DGridService } from './d-grid.service';

describe('DGridService', () => {
  let service: DGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
