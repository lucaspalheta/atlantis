import { TestBed, inject } from '@angular/core/testing';

import { Princi_ramificacaoService } from './princi_ramificacao.service';

describe('Princi_ramificacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Princi_ramificacaoService]
    });
  });

  it('should be created', inject([Princi_ramificacaoService], (service: Princi_ramificacaoService) => {
    expect(service).toBeTruthy();
  }));
});
