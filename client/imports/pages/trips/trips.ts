import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SettingsPage} from '../settings/settings';
import template from './trips.html';
import {Trips} from "../../../../imports/collections";
import {Trip} from "../../../../imports/models";
import {Observable} from "rxjs";

@Component({
    selector: 'trips-page',
    template
})
export class TripsPage {
    private trips: Observable<Trip[]>;

    constructor(public navCtrl: NavController) {
    }

    ngOnInit() {
        let isEven = false;

        this.trips = Trips.find({
                $or: [{
                    owner: Meteor.userId()
                }, {
                    users: Meteor.userId()
                }]
            },
            {sort: {date: 1}}
        ).map((trips: Trip[]) => {
            return trips;
        });
    }

    showSettings() {
        this.navCtrl.push(SettingsPage);
    }
}
