import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {TuboService} from '../tubo.service';
import {Tubo} from '../tubo';

@Component({
  selector: 'tubos-list',
  templateUrl: './tubos-list.component.html',
  styleUrls: ['./tubos-list.component.css']
})
export class TubosListComponent implements OnInit {

  tubos: FirebaseListObservable<Tubo[]>;
  
  constructor(private tuboService: TuboService) {}

  ngOnInit() {
    this.tubos = this.tuboService.getTubosList();
  }
  
  deleteTubos() {
    this.tuboService.deleteAll()
  }
}
