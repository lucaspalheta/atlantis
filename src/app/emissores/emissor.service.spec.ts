import { TestBed, inject } from '@angular/core/testing';

import { EmissorService } from './emissor.service';

describe('EmissorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmissorService]
    });
  });

  it('should be created', inject([EmissorService], (service: EmissorService) => {
    expect(service).toBeTruthy();
  }));
});
