import {Component, OnInit, Input} from '@angular/core';

import {Princi_ramificacaoService} from '../princi_ramificacao.service';
import {Princi_ramificacao} from '../princi_ramificacao';

@Component({
  selector: 'princi_ramificacao-details',
  templateUrl: './princi_ramificacao-details.component.html',
  styleUrls: ['./princi_ramificacao-details.component.css']
})
export class Princi_ramificacaoDetailsComponent implements OnInit {

  @Input() princi_ramificacao: Princi_ramificacao;

  constructor(private princi_ramificacaoService: Princi_ramificacaoService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.princi_ramificacaoService.updatePrinci_ramificacao(this.princi_ramificacao.$key, {active: isActive})
  }

  deletePrinci_ramificacao() {
    this.princi_ramificacaoService.deletePrinci_ramificacao(this.princi_ramificacao.$key)
  }

}
