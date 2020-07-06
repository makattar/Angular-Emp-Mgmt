import { TestBed } from '@angular/core/testing';

import { ListToEditService } from './list-to-edit.service';

describe('ListToEditService', () => {
  let service: ListToEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListToEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
