
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    
  }

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
	email: string;
	password: string;

	constructor(public authService: AuthService) {}

	

	signup() {
		this.authService.signup(this.email, this.password);
		this.email = this.password = '';
	}

	login() {
		this.authService.login(this.email, this.password);
		this.email = this.password = '';    
	}

	logout() {
		this.authService.logout();
	}

	
}





