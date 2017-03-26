import {Component, ViewChild} from '@angular/core';
import template from './home.html';
import {TripsPage} from "../trips/trips";
import {FriendsPage} from "../friends/friends";
import {MapPage} from "../map/map";
import {Slides} from "ionic-angular";

@Component({
	selector: 'home-page',
    template
})
export class HomePage {
	tabTrips: any = TripsPage;
	tabMap: any = MapPage;
	tabFriends: any = FriendsPage;

    constructor() {
    }

}

