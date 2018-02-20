import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {PrincipalService} from '../principal.service';
import {Principal} from '../principal';

@Component({
  selector: 'principais-list',
  templateUrl: './principais-list.component.html',
  styleUrls: ['./principais-list.component.css']
})
export class PrincipaisListComponent implements OnInit {

  principais: FirebaseListObservable<Principal[]>;
  
  constructor(private principalService: PrincipalService) {}

  ngOnInit() {
    this.principais = this.principalService.getPrincipaisList();
  }
  
  deletePrincipais() {
    this.principalService.deleteAll()
  }
}
