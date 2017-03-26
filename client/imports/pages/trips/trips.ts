import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SettingsPage} from '../settings/settings';
import template from './trips.html';

@Component({
	selector: 'trips-page',
    template
})
export class TripsPage {
    constructor(public navCtrl: NavController) {
    }

	showSettings() {
		this.navCtrl.push(SettingsPage);
	}
}
