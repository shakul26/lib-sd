import { TestBed } from '@angular/core/testing';

import { RmGridService } from './rm-grid.service';

describe('RmGridService', () => {
  let service: RmGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
