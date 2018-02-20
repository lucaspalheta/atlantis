import {Component, OnInit, Input} from '@angular/core';

import {PrincipalService} from '../principal.service';
import {Principal} from '../principal';

@Component({
  selector: 'principal-details',
  templateUrl: './principal-details.component.html',
  styleUrls: ['./principal-details.component.css']
})
export class PrincipalDetailsComponent implements OnInit {

  @Input() principal: Principal;

  constructor(private principalService: PrincipalService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.principalService.updatePrincipal(this.principal.$key, {active: isActive})
  }

  deletePrincipal() {
    this.principalService.deletePrincipal(this.principal.$key)
  }

}
