import {Component, ViewChild} from '@angular/core';
import template from './home.html';
import {ProfilePage} from "../profile/profile";
import {FriendsPage} from "../friends/friends";
import {MapPage} from "../map/map";
import {Slides} from "ionic-angular";

@Component({
	selector: 'home-page',
    template
})
export class HomePage {
    @ViewChild(Slides) slides: Slides;

    constructor() {
    }

}

