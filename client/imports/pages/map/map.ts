import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {NewTripPage} from '../new-trip/new-trip';
import template from './map.html';
import {
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapsLatLng,
    CameraPosition,
    GoogleMapsMapTypeId,
    Geolocation,
    Geoposition,
    GeolocationOptions,
    GoogleMapsMarker,
    GoogleMapsMarkerOptions
} from 'ionic-native';
@Component({
    selector: 'map-page',
    template
})
export class MapPage {
    map: GoogleMap;

    constructor(public modalCtrl: ModalController) {

    }

    ngAfterViewInit() {
        this.loadMap();
    }

    loadMap() {
        let element: HTMLElement = document.getElementById('map');

        this.map = new GoogleMap(element);

        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
            let geolocationOptions: GeolocationOptions = {
                enableHighAccuracy: true
            };

            Geolocation.watchPosition(geolocationOptions).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
                console.log(position);
                Meteor.call('updateLocation', {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }, (e) => {
                    if (e) {
                        return console.error(e);
                    }
                    console.log('Location updated');
                });
            });

            this.map.setCompassEnabled(true);
            this.map.setMyLocationEnabled(true);

            Meteor.users.find({}).observeChanges({
                changed(id, fields) {
                    console.log("Changement observé : " + id + "      " + fields);
                }
            });
        }).catch(e => {
            console.error(e);
        });
    }

    fabPlusAction() {
        let markerOptions: GoogleMapsMarkerOptions = {
            position: new GoogleMapsLatLng(Meteor.user().profile.location.lat, Meteor.user().profile.location.lng),
            title: 'Réglage de la destination',
            snippet: 'Pressez-moi longtemps pour me déplacer.',
            draggable: true
        };

        console.log(JSON.stringify(markerOptions.position));

        this.map.addMarker(markerOptions).then((marker: GoogleMapsMarker) => {
            this.map.animateCamera(markerOptions.position);
            marker.showInfoWindow();
        }).catch(e => {
            console.log("Erreur : " + e);
        });
    }
}
