import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Princi_ramificacao} from '../princi_ramificacao';
import {Princi_ramificacaoService} from '../princi_ramificacao.service';

@Component({
  selector: 'create-princi_ramificacao',
  templateUrl: './create-princi_ramificacao.component.html',
  styleUrls: ['./create-princi_ramificacao.component.css']
})
export class CreatePrinci_ramificacaoComponent implements OnInit {

  princi_ramificacao: Princi_ramificacao = new Princi_ramificacao();
  submitted = false;

  constructor(private princi_ramificacaoService: Princi_ramificacaoService) {}

  ngOnInit() {
  }

  newPrinci_ramificacao(): void {
    this.submitted = false;
    this.princi_ramificacao = new Princi_ramificacao();
  }

  save() {
    this.princi_ramificacaoService.createPrinci_ramificacao(this.princi_ramificacao);
    this.princi_ramificacao = new Princi_ramificacao();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
