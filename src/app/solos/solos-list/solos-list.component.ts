import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {SoloService} from '../solo.service';
import {Solo} from '../solo';

@Component({
  selector: 'solos-list',
  templateUrl: './solos-list.component.html',
  styleUrls: ['./solos-list.component.css']
})
export class SolosListComponent implements OnInit {

  solos: FirebaseListObservable<Solo[]>;
  
  constructor(private soloService: SoloService) {}

  ngOnInit() {
    this.solos = this.soloService.getSolosList();
  }
  
  deleteSolos() {
    this.soloService.deleteAll()
  }
}
