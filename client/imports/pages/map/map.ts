import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapsLatLng,
    Geolocation,
    Geoposition,
    GeolocationOptions,
    GoogleMapsMarker,
    GoogleMapsMarkerOptions
} from 'ionic-native';
import template from './map.html';
import {NewTripPage} from "../new-trip/new-trip";

@Component({
    selector: 'map-page',
    template
})
export class MapPage {
    map: GoogleMap;
    draggableMarker: GoogleMapsMarker;
    location: GoogleMapsLatLng;

    constructor(public navCtrl: NavController) {
    }

    ngAfterViewInit() {
        this.loadMap();
    }

    loadMap() {
        let element: HTMLElement = document.getElementById('map');

        this.map = new GoogleMap(element);

        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
            let markerOptions: GoogleMapsMarkerOptions = {
                position: new GoogleMapsLatLng(0, 0),
                title: 'Réglage de la destination',
                snippet: 'Pressez-moi longtemps pour me déplacer.',
                draggable: true,
                visible: false,
                styles: {
                    color: '#00d646'
                }
            };

            this.map.addMarker(markerOptions).then((marker: GoogleMapsMarker) => {
                this.draggableMarker = marker;
            }).catch(e => {
                console.log("Erreur : " + e);
            });

            let geolocationOptions: GeolocationOptions = {
                enableHighAccuracy: true
            };

            Geolocation.watchPosition(geolocationOptions).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
                this.location = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);
                Meteor.call('updateLocation', this.location, (e) => {
                    if (e) {
                        return console.error(e);
                    }
                });
            });

            this.map.setCompassEnabled(true);
            this.map.setMyLocationEnabled(true);

            Meteor.users.find({}).observeChanges({
                changed(id, fields) {
                }
            });
        }).catch(e => {
            console.error(e);
        });
    }

    fabPlusAction() {
        if (this.draggableMarker.isVisible()) {
            this.draggableMarker.setVisible(false);
            this.draggableMarker.getPosition().then((position: GoogleMapsLatLng) => {
                this.navCtrl.push(NewTripPage, {destination: position});
            });
        } else {
            this.map.animateCamera(this.location);
            this.draggableMarker.setPosition(this.location);
            this.draggableMarker.setVisible(true);
            this.draggableMarker.showInfoWindow();
        }
    }
}
