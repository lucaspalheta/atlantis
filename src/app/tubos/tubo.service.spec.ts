import { TestBed, inject } from '@angular/core/testing';

import { TuboService } from './tubo.service';

describe('TuboService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuboService]
    });
  });

  it('should be created', inject([TuboService], (service: TuboService) => {
    expect(service).toBeTruthy();
  }));
});
