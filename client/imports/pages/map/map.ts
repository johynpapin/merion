import {Component} from '@angular/core';
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
    constructor() {

    }

    ngAfterViewInit() {
        this.loadMap();
    }

    loadMap() {
        let element: HTMLElement = document.getElementById('map');

        let map = new GoogleMap(element);

        //ymap.setCompassEnabled();

        map.one(GoogleMapsEvent.MAP_READY).then(() => {
            Meteor.users.find({}).observeChanges({
                changed(id, fields) {
                    console.log(id, fields);
                }
            })
        }).catch(e => {
            console.error(e);
        });
    }

    fabPlusAction() {
        console.log('Sapristi !');
    }
}
