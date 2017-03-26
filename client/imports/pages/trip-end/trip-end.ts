import {Component} from '@angular/core';
import template from './trip-end.html';
import {NavParams, ViewController, NavController} from "ionic-angular";
import {HomePage} from '../home/home';

@Component({
	selector: 'trip-end-page',
    template
})
export class TripEndPage {
    constructor(private params: NavParams, private viewCtrl: ViewController, public navCtrl: NavController) {

    }

	showHome() {
		this.navCtrl.setRoot(HomePage);
		this.navCtrl.popToRoot();
	}
}
