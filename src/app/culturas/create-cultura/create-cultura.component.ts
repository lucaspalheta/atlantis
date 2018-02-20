import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Cultura} from '../cultura';
import {CulturaService} from '../cultura.service';

@Component({
  selector: 'create-cultura',
  templateUrl: './create-cultura.component.html',
  styleUrls: ['./create-cultura.component.css']
})
export class CreateCulturaComponent implements OnInit {

  cultura: Cultura = new Cultura();
  submitted = false;

  constructor(private culturaService: CulturaService) {}

  ngOnInit() {
  }

  newCultura(): void {
    this.submitted = false;
    this.cultura = new Cultura();
  }

  save() {
    this.culturaService.createCultura(this.cultura);
    this.cultura = new Cultura();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
