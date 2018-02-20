import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Setor} from './setor';

@Injectable()
export class SetorService {

  private dbPath: string = '/setores';

  setor: FirebaseObjectObservable<Setor> = null;
  setores: FirebaseListObservable<Setor[]> = null;

  constructor(private db: AngularFireDatabase) {this.setores = db.list('/setores')}

  
  getSetor(key: string): FirebaseObjectObservable<Setor> {
    this.setor = this.db.object(`${this.dbPath}/${key}`);
    return this.setor;
  }

  createSetor(setor: Setor): void {
    this.setores.push(setor);
  }

  updateSetor(key: string, value: any): void {
    this.setores.update(key, value).catch(error => this.handleError(error));
  }

  deleteSetor(key: string): void {
    this.setores.remove(key).catch(error => this.handleError(error));
  }

  getSetoresList(query = {}): FirebaseListObservable<Setor[]> {
    this.setores = this.db.list(this.dbPath, {  });
    return this.setores;
  }

  deleteAll(): void {
    this.setores.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
