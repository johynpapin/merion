import {Component} from '@angular/core';
import template from './home.html';

const DEFAULT_ZOOM = 8;
const DEFAULT_LAT = 51.678418;
const DEFAULT_LNG = 7.809007;

@Component({
    selector: 'home-page',
    template
})
export class HomePage {
    lat: number = DEFAULT_LAT;
    lng: number = DEFAULT_LNG;
    zoom: number = DEFAULT_ZOOM;

    constructor() {
    }
}