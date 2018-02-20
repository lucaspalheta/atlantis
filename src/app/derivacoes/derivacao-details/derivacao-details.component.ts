import {Component, OnInit, Input} from '@angular/core';

import {DerivacaoService} from '../derivacao.service';
import {Derivacao} from '../derivacao';

@Component({
  selector: 'derivacao-details',
  templateUrl: './derivacao-details.component.html',
  styleUrls: ['./derivacao-details.component.css']
})
export class DerivacaoDetailsComponent implements OnInit {

  @Input() derivacao: Derivacao;

  constructor(private derivacaoService: DerivacaoService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.derivacaoService.updateDerivacao(this.derivacao.$key, {active: isActive})
  }

  deleteDerivacao() {
    this.derivacaoService.deleteDerivacao(this.derivacao.$key)
  }

}
