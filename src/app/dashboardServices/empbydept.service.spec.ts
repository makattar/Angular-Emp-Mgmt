import { TestBed } from '@angular/core/testing';

import { EmpbydeptService } from './empbydept.service';

describe('EmpbydeptService', () => {
  let service: EmpbydeptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpbydeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
