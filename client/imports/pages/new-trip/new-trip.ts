import {Component} from '@angular/core';
import template from './new-trip.html';
import {NavParams, ViewController} from "ionic-angular";

@Component({
    template
})
export class NewTripPage {
    constructor(private params: NavParams, private viewCtrl: ViewController) {

    }
}
