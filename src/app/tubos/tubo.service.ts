import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Tubo} from './tubo';

@Injectable()
export class TuboService {

  private dbPath: string = '/tubos';

  tubo: FirebaseObjectObservable<Tubo> = null;
  tubos: FirebaseListObservable<Tubo[]> = null;

  constructor(private db: AngularFireDatabase) {this.tubos = db.list('/tubos')}

  
  getTubo(key: string): FirebaseObjectObservable<Tubo> {
    this.tubo = this.db.object(`${this.dbPath}/${key}`);
    return this.tubo;
  }

  createTubo(tubo: Tubo): void {
    this.tubos.push(tubo);
  }

  updateTubo(key: string, value: any): void {
    this.tubos.update(key, value).catch(error => this.handleError(error));
  }

  deleteTubo(key: string): void {
    this.tubos.remove(key).catch(error => this.handleError(error));
  }

  getTubosList(query = {}): FirebaseListObservable<Tubo[]> {
    this.tubos = this.db.list(this.dbPath, {  });
    return this.tubos;
  }

  deleteAll(): void {
    this.tubos.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
