import { TestBed } from '@angular/core/testing';

import { ArrayServicesService } from './array-services.service';

describe('ArrayServicesService', () => {
  let service: ArrayServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
