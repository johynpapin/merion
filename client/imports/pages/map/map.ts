import {Component} from '@angular/core';
import { ModalController } from 'ionic-angular';
import {TripsPage} from '../trips/trips';
import template from './map.html';
import {
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapsLatLng,
    CameraPosition,
    GoogleMapsMarkerOptions,
    GoogleMapsMarker,
    GoogleMapsMapTypeId,
    Geolocation,
    Geoposition
} from 'ionic-native';
@Component({
    selector: 'map-page',
    template
})
export class MapPage {
    constructor(public modalCtrl: ModalController) {

    }

    ngAfterViewInit() {
        this.loadMap();
    }

    loadMap() {
        let element: HTMLElement = document.getElementById('map');

        let map = new GoogleMap(element);

        map.one(GoogleMapsEvent.MAP_READY).then(() => {
            map.setCompassEnabled(true);
            map.setMyLocationEnabled(true);

            Meteor.users.find({}).observeChanges({
                changed(id, fields) {
                    console.log(id, fields);
                }
            });
        }).catch(e => {
            console.error(e);
        });
    }

	fabPlusAction() {
		let modal = this.modalCtrl.create(TripsPage);
		modal.present();
	}
}
