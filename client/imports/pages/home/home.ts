import {Component} from '@angular/core';
import template from './home.html';
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
    selector: 'home-page',
    template
})
export class HomePage {
    constructor() {
    }

    ngAfterViewInit() {
        this.loadMap();
    }

    loadMap() {
        let element: HTMLElement = document.getElementById('map');

        let map = new GoogleMap(element);

        map.one(GoogleMapsEvent.MAP_READY).then(() => {
            Geolocation.getCurrentPosition().then((position: Geoposition) => {
                let latLng: GoogleMapsLatLng = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);

                let pos: CameraPosition = {
                    target: latLng,
                    zoom: 18,
                    tilt: 30
                };

                map.moveCamera(pos);

                let markerOptions: GoogleMapsMarkerOptions = {
                    position: latLng,
                    title: '42'
                };

                map.addMarker(markerOptions).then((marker: GoogleMapsMarker) => {
                    marker.showInfoWindow();
                });
            });
        });
    }
}