import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Derivacao} from '../derivacao';
import {DerivacaoService} from '../derivacao.service';

@Component({
  selector: 'create-derivacao',
  templateUrl: './create-derivacao.component.html',
  styleUrls: ['./create-derivacao.component.css']
})
export class CreateDerivacaoComponent implements OnInit {

  derivacao: Derivacao = new Derivacao();
  submitted = false;

  constructor(private derivacaoService: DerivacaoService) {}

  ngOnInit() {
  }

  newDerivacao(): void {
    this.submitted = false;
    this.derivacao = new Derivacao();
  }

  save() {
    this.derivacaoService.createDerivacao(this.derivacao);
    this.derivacao = new Derivacao();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
