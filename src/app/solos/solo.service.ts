import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Solo} from './solo';

@Injectable()
export class SoloService {

  private dbPath: string = '/solos';

  solo: FirebaseObjectObservable<Solo> = null;
  solos: FirebaseListObservable<Solo[]> = null;

  constructor(private db: AngularFireDatabase) {this.solos = db.list('/solos')}

  
  getSolo(key: string): FirebaseObjectObservable<Solo> {
    this.solo = this.db.object(`${this.dbPath}/${key}`);
    return this.solo;
  }

  createSolo(solo: Solo): void {
    this.solos.push(solo);
  }

  updateSolo(key: string, value: any): void {
    this.solos.update(key, value).catch(error => this.handleError(error));
  }

  deleteSolo(key: string): void {
    this.solos.remove(key).catch(error => this.handleError(error));
  }

  getSolosList(query = {}): FirebaseListObservable<Solo[]> {
    this.solos = this.db.list(this.dbPath, {  });
    return this.solos;
  }

  deleteAll(): void {
    this.solos.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
