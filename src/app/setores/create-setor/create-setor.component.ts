import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Setor} from '../setor';
import {SetorService} from '../setor.service';

@Component({
  selector: 'create-setor',
  templateUrl: './create-setor.component.html',
  styleUrls: ['./create-setor.component.css']
})
export class CreateSetorComponent implements OnInit {

  setor: Setor = new Setor();
  submitted = false;

  constructor(private setorService: SetorService) {}

  ngOnInit() {
  }

  newSetor(): void {
    this.submitted = false;
    this.setor = new Setor();
  }

  save() {
    this.setorService.createSetor(this.setor);
    this.setor = new Setor();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
