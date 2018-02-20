import { TestBed, inject } from '@angular/core/testing';

import { DerivacaoService } from './derivacao.service';

describe('DerivacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DerivacaoService]
    });
  });

  it('should be created', inject([DerivacaoService], (service: DerivacaoService) => {
    expect(service).toBeTruthy();
  }));
});
