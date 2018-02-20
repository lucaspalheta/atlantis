import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Estacao} from '../estacao';
import {EstacaoService} from '../estacao.service';

@Component({
  selector: 'create-estacao',
  templateUrl: './create-estacao.component.html',
  styleUrls: ['./create-estacao.component.css']
})
export class CreateEstacaoComponent implements OnInit {

  estacao: Estacao = new Estacao();
  submitted = false;

  constructor(private estacaoService: EstacaoService) {}

  ngOnInit() {
  }

  newEstacao(): void {
    this.submitted = false;
    this.estacao = new Estacao();
  }

  save() {
    this.estacaoService.createEstacao(this.estacao);
    this.estacao = new Estacao();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
