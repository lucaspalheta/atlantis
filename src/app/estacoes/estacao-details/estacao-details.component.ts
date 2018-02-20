import {Component, OnInit, Input} from '@angular/core';

import {EstacaoService} from '../estacao.service';
import {Estacao} from '../estacao';

@Component({
  selector: 'estacao-details',
  templateUrl: './estacao-details.component.html',
  styleUrls: ['./estacao-details.component.css']
})
export class EstacaoDetailsComponent implements OnInit {

  @Input() estacao: Estacao;

  constructor(private estacaoService: EstacaoService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.estacaoService.updateEstacao(this.estacao.$key, {active: isActive})
  }

  deleteEstacao() {
    this.estacaoService.deleteEstacao(this.estacao.$key)
  }

}
