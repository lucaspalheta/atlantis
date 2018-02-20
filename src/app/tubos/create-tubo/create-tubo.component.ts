import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Tubo} from '../tubo';
import {TuboService} from '../tubo.service';

@Component({
  selector: 'create-tubo',
  templateUrl: './create-tubo.component.html',
  styleUrls: ['./create-tubo.component.css']
})
export class CreateTuboComponent implements OnInit {

  tubo: Tubo = new Tubo();
  submitted = false;

  constructor(private tuboService: TuboService) {}

  ngOnInit() {
  }

  newTubo(): void {
    this.submitted = false;
    this.tubo = new Tubo();
  }

  save() {
    this.tuboService.createTubo(this.tubo);
    this.tubo = new Tubo();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
