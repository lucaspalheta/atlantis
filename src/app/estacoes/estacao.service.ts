import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Estacao} from './estacao';

@Injectable()
export class EstacaoService {

  private dbPath: string = '/estacoes';

  estacao: FirebaseObjectObservable<Estacao> = null;
  estacoes: FirebaseListObservable<Estacao[]> = null;

  constructor(private db: AngularFireDatabase) {this.estacoes = db.list('/estacoes')}

  
  getEstacao(key: string): FirebaseObjectObservable<Estacao> {
    this.estacao = this.db.object(`${this.dbPath}/${key}`);
    return this.estacao;
  }

  createEstacao(estacao: Estacao): void {
    this.estacoes.push(estacao);
  }

  updateEstacao(key: string, value: any): void {
    this.estacoes.update(key, value).catch(error => this.handleError(error));
  }

  deleteEstacao(key: string): void {
    this.estacoes.remove(key).catch(error => this.handleError(error));
  }

  getEstacoesList(query = {}): FirebaseListObservable<Estacao[]> {
    this.estacoes = this.db.list(this.dbPath, {  });
    return this.estacoes;
  }

  deleteAll(): void {
    this.estacoes.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
