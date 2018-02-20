import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Principal} from './principal';

@Injectable()
export class PrincipalService {

  private dbPath: string = '/principais';

  principal: FirebaseObjectObservable<Principal> = null;
  principais: FirebaseListObservable<Principal[]> = null;

  constructor(private db: AngularFireDatabase) {this.principais = db.list('/principais')}

  
  getPrincipal(key: string): FirebaseObjectObservable<Principal> {
    this.principal = this.db.object(`${this.dbPath}/${key}`);
    return this.principal;
  }

  createPrincipal(principal: Principal): void {
    this.principais.push(principal);
  }

  updatePrincipal(key: string, value: any): void {
    this.principais.update(key, value).catch(error => this.handleError(error));
  }

  deletePrincipal(key: string): void {
    this.principais.remove(key).catch(error => this.handleError(error));
  }

  getPrincipaisList(query = {}): FirebaseListObservable<Principal[]> {
    this.principais = this.db.list(this.dbPath, {  });
    return this.principais;
  }

  deleteAll(): void {
    this.principais.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
