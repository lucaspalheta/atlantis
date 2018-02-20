import {Component, OnInit, Input} from '@angular/core';

import {CulturaService} from '../cultura.service';
import {Cultura} from '../cultura';

@Component({
  selector: 'cultura-details',
  templateUrl: './cultura-details.component.html',
  styleUrls: ['./cultura-details.component.css']
})
export class CulturaDetailsComponent implements OnInit {

  @Input() cultura: Cultura;

  constructor(private culturaService: CulturaService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.culturaService.updateCultura(this.cultura.$key, {active: isActive})
  }

  deleteCultura() {
    this.culturaService.deleteCultura(this.cultura.$key)
  }

}
