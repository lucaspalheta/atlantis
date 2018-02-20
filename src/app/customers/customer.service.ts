import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Customer} from './customer';

@Injectable()
export class CustomerService {

  private dbPath: string = '/customers';

  customer: FirebaseObjectObservable<Customer> = null;
  customers: FirebaseListObservable<Customer[]> = null;

  constructor(private db: AngularFireDatabase) {}

  getCustomer(key: string): FirebaseObjectObservable<Customer> {
    this.customer = this.db.object(`${this.dbPath}/${key}`);
    return this.customer;
  }

  createCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  updateCustomer(key: string, value: any): void {
    this.customers.update(key, value).catch(error => this.handleError(error));
  }

  deleteCustomer(key: string): void {
    this.customers.remove(key).catch(error => this.handleError(error));
  }

  getCustomersList(query = {}): FirebaseListObservable<Customer[]> {
    this.customers = this.db.list(this.dbPath, {  });
    return this.customers;
  }

  deleteAll(): void {
    this.customers.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
