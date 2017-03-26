import {Component} from '@angular/core';
import template from './trip-end.html';
import {NavParams, ViewController} from "ionic-angular";

@Component({
	selector: 'trip-end-page',
    template
})
export class TripEndPage {
    constructor(private params: NavParams, private viewCtrl: ViewController) {

    }
}
