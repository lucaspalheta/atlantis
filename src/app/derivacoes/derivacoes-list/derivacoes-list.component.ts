import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {DerivacaoService} from '../derivacao.service';
import {Derivacao} from '../derivacao';

@Component({
  selector: 'derivacoes-list',
  templateUrl: './derivacoes-list.component.html',
  styleUrls: ['./derivacoes-list.component.css']
})
export class DerivacoesListComponent implements OnInit {

  derivacoes: FirebaseListObservable<Derivacao[]>;
  
  constructor(private derivacaoService: DerivacaoService) {}

  ngOnInit() {
    this.derivacoes = this.derivacaoService.getDerivacoesList();
  }
  
  deleteDerivacoes() {
    this.derivacaoService.deleteAll()
  }
}
