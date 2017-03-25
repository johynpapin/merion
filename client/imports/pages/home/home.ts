import {Component} from '@angular/core';
import template from './home.html';
import {ProfilePage} from "../profile/profile";
import {FriendsPage} from "../friends/friends";
import {MapPage} from "../map/map";

@Component({
	selector: 'home-page',
    template
})
export class HomePage {
    tabProfile: any = ProfilePage;
    tabFriends: any = FriendsPage;
	tabMap: any = MapPage;

    constructor() {
    }

}

