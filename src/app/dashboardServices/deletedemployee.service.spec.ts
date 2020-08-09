import { TestBed } from '@angular/core/testing';

import { DeletedemployeeService } from './deletedemployee.service';

describe('DeletedemployeeService', () => {
  let service: DeletedemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletedemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
