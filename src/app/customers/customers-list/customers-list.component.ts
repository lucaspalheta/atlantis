import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {CustomerService} from '../customer.service';
import {Customer} from '../customer';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: FirebaseListObservable<Customer[]>;
  
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customers = this.customerService.getCustomersList();
  }
  
  deleteCustomers() {
    this.customerService.deleteAll()
  }
}
