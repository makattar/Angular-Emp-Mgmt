import { TestBed } from '@angular/core/testing';

import { ListToDispalyService } from './list-to-dispaly.service';

describe('ListToDispalyService', () => {
  let service: ListToDispalyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListToDispalyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
