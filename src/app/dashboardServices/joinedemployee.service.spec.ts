import { TestBed } from '@angular/core/testing';

import { JoinedemployeeService } from './joinedemployee.service';

describe('JoinedemployeeService', () => {
  let service: JoinedemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinedemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
