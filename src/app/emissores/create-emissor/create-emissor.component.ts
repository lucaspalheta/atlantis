import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Emissor} from '../emissor';
import {EmissorService} from '../emissor.service';

@Component({
  selector: 'create-emissor',
  templateUrl: './create-emissor.component.html',
  styleUrls: ['./create-emissor.component.css']
})
export class CreateEmissorComponent implements OnInit {

  emissor: Emissor = new Emissor();
  submitted = false;

  constructor(private emissorService: EmissorService) {}

  ngOnInit() {
  }

  newEmissor(): void {
    this.submitted = false;
    this.emissor = new Emissor();
  }

  save() {
    this.emissorService.createEmissor(this.emissor);
    this.emissor = new Emissor();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
