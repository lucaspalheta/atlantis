import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {EstacaoService} from '../estacao.service';
import {Estacao} from '../estacao';

@Component({
  selector: 'estacoes-list',
  templateUrl: './estacoes-list.component.html',
  styleUrls: ['./estacoes-list.component.css']
})
export class EstacoesListComponent implements OnInit {

  estacoes: FirebaseListObservable<Estacao[]>;
  
  constructor(private estacaoService: EstacaoService) {}

  ngOnInit() {
    this.estacoes = this.estacaoService.getEstacoesList();
  }
  
  deleteEstacoes() {
    this.estacaoService.deleteAll()
  }
}
