import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Principal} from '../principal';
import {PrincipalService} from '../principal.service';

@Component({
  selector: 'create-principal',
  templateUrl: './create-principal.component.html',
  styleUrls: ['./create-principal.component.css']
})
export class CreatePrincipalComponent implements OnInit {

  principal: Principal = new Principal();
  submitted = false;

  constructor(private principalService: PrincipalService) {}

  ngOnInit() {
  }

  newPrincipal(): void {
    this.submitted = false;
    this.principal = new Principal();
  }

  save() {
    this.principalService.createPrincipal(this.principal);
    this.principal = new Principal();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
