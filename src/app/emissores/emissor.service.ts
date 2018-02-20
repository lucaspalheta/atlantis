import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Emissor} from './emissor';

@Injectable()
export class EmissorService {

  private dbPath: string = '/emissores';

  emissor: FirebaseObjectObservable<Emissor> = null;
  emissores: FirebaseListObservable<Emissor[]> = null;

  constructor(private db: AngularFireDatabase) {this.emissores = db.list('/emissores')}

  
  getEmissor(key: string): FirebaseObjectObservable<Emissor> {
    this.emissor = this.db.object(`${this.dbPath}/${key}`);
    return this.emissor;
  }

  createEmissor(emissor: Emissor): void {
    this.emissores.push(emissor);
  }

  updateEmissor(key: string, value: any): void {
    this.emissores.update(key, value).catch(error => this.handleError(error));
  }

  deleteEmissor(key: string): void {
    this.emissores.remove(key).catch(error => this.handleError(error));
  }

  getEmissoresList(query = {}): FirebaseListObservable<Emissor[]> {
    this.emissores = this.db.list(this.dbPath, {  });
    return this.emissores;
  }

  deleteAll(): void {
    this.emissores.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
