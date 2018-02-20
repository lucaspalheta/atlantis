import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Derivacao} from './derivacao';

@Injectable()
export class DerivacaoService {

  private dbPath: string = '/derivacoes';

  derivacao: FirebaseObjectObservable<Derivacao> = null;
  derivacoes: FirebaseListObservable<Derivacao[]> = null;

  constructor(private db: AngularFireDatabase) {this.derivacoes = db.list('/derivacoes')}

  
  getDerivacao(key: string): FirebaseObjectObservable<Derivacao> {
    this.derivacao = this.db.object(`${this.dbPath}/${key}`);
    return this.derivacao;
  }

  createDerivacao(derivacao: Derivacao): void {
    this.derivacoes.push(derivacao);
  }

  updateDerivacao(key: string, value: any): void {
    this.derivacoes.update(key, value).catch(error => this.handleError(error));
  }

  deleteDerivacao(key: string): void {
    this.derivacoes.remove(key).catch(error => this.handleError(error));
  }

  getDerivacoesList(query = {}): FirebaseListObservable<Derivacao[]> {
    this.derivacoes = this.db.list(this.dbPath, {  });
    return this.derivacoes;
  }

  deleteAll(): void {
    this.derivacoes.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
