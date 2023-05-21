import { TestBed } from '@angular/core/testing';

import { InstaGridService } from './insta-grid.service';

describe('InstaGridService', () => {
  let service: InstaGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstaGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
