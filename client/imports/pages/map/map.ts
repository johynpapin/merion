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
import {Trips} from "../../../../imports/collections";
import {Trip} from "../../../../imports/models";

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

        let map = this.map = new GoogleMap(element);

        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

            this.map.addMarker({
                position: new GoogleMapsLatLng(0, 0),
                title: 'Réglage de la destination',
                snippet: 'Pressez-moi longtemps pour me déplacer.',
                draggable: true,
                visible: false
            }).then((marker: GoogleMapsMarker) => {
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

            Trips.find({}).observe({
                added(trip: Trip) {
                    console.log('Pouf pouf pouf');
                    const own = trip.owner === Meteor.userId();
                    const want = trip.users.indexOf(Meteor.userId()) > -1;
                    map.addMarker({
                        position: new GoogleMapsLatLng(trip.destination.lat, trip.destination.lng),
                        title: own ? 'Je participe !' : want ? 'Je suis intéressé.' : 'Déstination disponible',
                        icon: own ? 'yellow' : want ? '#008ed6' : 'red',
                    }).then((marker: GoogleMapsMarker) => {
                        console.log('Marker created !');
                    }).catch(e => {
                        console.log("Erreur : " + e);
                    });
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
