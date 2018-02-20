import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {Princi_ramificacaoService} from '../princi_ramificacao.service';
import {Princi_ramificacao} from '../princi_ramificacao';

@Component({
  selector: 'princi_ramificacoes-list',
  templateUrl: './princi_ramificacoes-list.component.html',
  styleUrls: ['./princi_ramificacoes-list.component.css']
})
export class Princi_ramificacoesListComponent implements OnInit {

  princi_ramificacoes: FirebaseListObservable<Princi_ramificacao[]>;
  
  constructor(private princi_ramificacaoService: Princi_ramificacaoService) {}

  ngOnInit() {
    this.princi_ramificacoes = this.princi_ramificacaoService.getPrinci_ramificacoesList();
  }
  
  deletePrinci_ramificacoes() {
    this.princi_ramificacaoService.deleteAll()
  }
}
