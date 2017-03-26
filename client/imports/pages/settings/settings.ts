import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AboutPage} from './about/about';
import template from './settings.html';

@Component({
    selector: 'settings-page',
    template
})
export class SettingsPage {
    constructor(public navCtrl: NavController) {

    }

	showAbout() {
		//show about page
		this.navCtrl.push(AboutPage);
	}
}
