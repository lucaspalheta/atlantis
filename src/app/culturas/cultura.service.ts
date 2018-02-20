import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Cultura} from './cultura';

@Injectable()
export class CulturaService {

  private dbPath: string = '/culturas';

  cultura: FirebaseObjectObservable<Cultura> = null;
  culturas: FirebaseListObservable<Cultura[]> = null;

  constructor(private db: AngularFireDatabase) {this.culturas = db.list('/culturas')}

  
  getCultura(key: string): FirebaseObjectObservable<Cultura> {
    this.cultura = this.db.object(`${this.dbPath}/${key}`);
    return this.cultura;
  }

  createCultura(cultura: Cultura): void {
    this.culturas.push(cultura);
  }

  updateCultura(key: string, value: any): void {
    this.culturas.update(key, value).catch(error => this.handleError(error));
  }

  deleteCultura(key: string): void {
    this.culturas.remove(key).catch(error => this.handleError(error));
  }

  getCulturasList(query = {}): FirebaseListObservable<Cultura[]> {
    this.culturas = this.db.list(this.dbPath, {  });
    return this.culturas;
  }

  deleteAll(): void {
    this.culturas.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
