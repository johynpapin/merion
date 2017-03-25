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
	tabProfile: any = ProfilePage;
	tabMap: any = MapPage;
	tabFriends: any = FriendsPage;

    constructor() {
    }

}

