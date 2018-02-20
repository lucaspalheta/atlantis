import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {CulturaService} from '../cultura.service';
import {Cultura} from '../cultura';

@Component({
  selector: 'culturas-list',
  templateUrl: './culturas-list.component.html',
  styleUrls: ['./culturas-list.component.css']
})
export class CulturasListComponent implements OnInit {

  culturas: FirebaseListObservable<Cultura[]>;
  
  constructor(private culturaService: CulturaService) {}

  ngOnInit() {
    this.culturas = this.culturaService.getCulturasList();
  }
  
  deleteCulturas() {
    this.culturaService.deleteAll()
  }
}
