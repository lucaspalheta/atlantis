import {Component, OnInit, Input} from '@angular/core';

import {EmissorService} from '../emissor.service';
import {Emissor} from '../emissor';

@Component({
  selector: 'emissor-details',
  templateUrl: './emissor-details.component.html',
  styleUrls: ['./emissor-details.component.css']
})
export class EmissorDetailsComponent implements OnInit {

  @Input() emissor: Emissor;

  constructor(private emissorService: EmissorService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.emissorService.updateEmissor(this.emissor.$key, {active: isActive})
  }

  deleteEmissor() {
    this.emissorService.deleteEmissor(this.emissor.$key)
  }

}
