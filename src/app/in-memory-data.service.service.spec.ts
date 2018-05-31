import { TestBed, inject } from '@angular/core/testing';

import { InMemoryData.ServiceService } from './in-memory-data.service.service';

describe('InMemoryData.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryData.ServiceService]
    });
  });

  it('should be created', inject([InMemoryData.ServiceService], (service: InMemoryData.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
