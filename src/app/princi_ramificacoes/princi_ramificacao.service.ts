import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Princi_ramificacao} from './princi_ramificacao';

@Injectable()
export class Princi_ramificacaoService {

  private dbPath: string = '/princi_ramificacoes';

  princi_ramificacao: FirebaseObjectObservable<Princi_ramificacao> = null;
  princi_ramificacoes: FirebaseListObservable<Princi_ramificacao[]> = null;

  constructor(private db: AngularFireDatabase) {this.princi_ramificacoes = db.list('/princi_ramificacoes')}

  
  getPrinci_ramificacao(key: string): FirebaseObjectObservable<Princi_ramificacao> {
    this.princi_ramificacao = this.db.object(`${this.dbPath}/${key}`);
    return this.princi_ramificacao;
  }

  createPrinci_ramificacao(princi_ramificacao: Princi_ramificacao): void {
    this.princi_ramificacoes.push(princi_ramificacao);
  }

  updatePrinci_ramificacao(key: string, value: any): void {
    this.princi_ramificacoes.update(key, value).catch(error => this.handleError(error));
  }

  deletePrinci_ramificacao(key: string): void {
    this.princi_ramificacoes.remove(key).catch(error => this.handleError(error));
  }

  getPrinci_ramificacoesList(query = {}): FirebaseListObservable<Princi_ramificacao[]> {
    this.princi_ramificacoes = this.db.list(this.dbPath, {  });
    return this.princi_ramificacoes;
  }

  deleteAll(): void {
    this.princi_ramificacoes.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
