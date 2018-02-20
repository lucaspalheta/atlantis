import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {SetorService} from '../setor.service';
import {Setor} from '../setor';

@Component({
  selector: 'setores-list',
  templateUrl: './setores-list.component.html',
  styleUrls: ['./setores-list.component.css']
})
export class SetoresListComponent implements OnInit {

  setores: FirebaseListObservable<Setor[]>;
  
  constructor(private setorService: SetorService) {}

  ngOnInit() {
    this.setores = this.setorService.getSetoresList();
  }
  
  deleteSetores() {
    this.setorService.deleteAll()
  }
}
