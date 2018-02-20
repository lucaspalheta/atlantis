import { TestBed, inject } from '@angular/core/testing';

import { EstacaoService } from './estacao.service';

describe('EstacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstacaoService]
    });
  });

  it('should be created', inject([EstacaoService], (service: EstacaoService) => {
    expect(service).toBeTruthy();
  }));
});
