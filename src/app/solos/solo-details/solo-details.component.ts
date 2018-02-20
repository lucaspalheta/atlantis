import {Component, OnInit, Input} from '@angular/core';

import {SoloService} from '../solo.service';
import {Solo} from '../solo';

@Component({
  selector: 'solo-details',
  templateUrl: './solo-details.component.html',
  styleUrls: ['./solo-details.component.css']
})
export class SoloDetailsComponent implements OnInit {

  @Input() solo: Solo;

  constructor(private soloService: SoloService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.soloService.updateSolo(this.solo.$key, {active: isActive})
  }

  deleteSolo() {
    this.soloService.deleteSolo(this.solo.$key)
  }

}
