import { TestBed } from '@angular/core/testing';

import { DeletedemplistService } from './deletedemplist.service';

describe('DeletedemplistService', () => {
  let service: DeletedemplistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletedemplistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
