import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {EmissorService} from '../emissor.service';
import {Emissor} from '../emissor';

@Component({
  selector: 'emissores-list',
  templateUrl: './emissores-list.component.html',
  styleUrls: ['./emissores-list.component.css']
})
export class EmissoresListComponent implements OnInit {

  emissores: FirebaseListObservable<Emissor[]>;
  
  constructor(private emissorService: EmissorService) {}

  ngOnInit() {
    this.emissores = this.emissorService.getEmissoresList();
  }
  
  deleteEmissores() {
    this.emissorService.deleteAll()
  }
}
