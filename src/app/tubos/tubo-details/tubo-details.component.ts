import {Component, OnInit, Input} from '@angular/core';

import {TuboService} from '../tubo.service';
import {Tubo} from '../tubo';

@Component({
  selector: 'tubo-details',
  templateUrl: './tubo-details.component.html',
  styleUrls: ['./tubo-details.component.css']
})
export class TuboDetailsComponent implements OnInit {

  @Input() tubo: Tubo;

  constructor(private tuboService: TuboService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.tuboService.updateTubo(this.tubo.$key, {active: isActive})
  }

  deleteTubo() {
    this.tuboService.deleteTubo(this.tubo.$key)
  }

}
