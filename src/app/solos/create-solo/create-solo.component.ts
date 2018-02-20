import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Solo} from '../solo';
import {SoloService} from '../solo.service';

@Component({
  selector: 'create-solo',
  templateUrl: './create-solo.component.html',
  styleUrls: ['./create-solo.component.css']
})
export class CreateSoloComponent implements OnInit {

  solo: Solo = new Solo();
  submitted = false;

  constructor(private soloService: SoloService) {}

  ngOnInit() {
  }

  newSolo(): void {
    this.submitted = false;
    this.solo = new Solo();
  }

  save() {
    this.soloService.createSolo(this.solo);
    this.solo = new Solo();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
