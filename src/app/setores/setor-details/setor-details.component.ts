import {Component, OnInit, Input} from '@angular/core';

import {SetorService} from '../setor.service';
import {Setor} from '../setor';

@Component({
  selector: 'setor-details',
  templateUrl: './setor-details.component.html',
  styleUrls: ['./setor-details.component.css']
})
export class SetorDetailsComponent implements OnInit {

  @Input() setor: Setor;

  constructor(private setorService: SetorService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.setorService.updateSetor(this.setor.$key, {active: isActive})
  }

  deleteSetor() {
    this.setorService.deleteSetor(this.setor.$key)
  }

}
