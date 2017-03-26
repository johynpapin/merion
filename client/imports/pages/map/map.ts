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

        let map = new GoogleMap(element);

        map.one(GoogleMapsEvent.MAP_READY).then(() => {
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
        console.log('Gestion de la destination.');

        let markerOptions: GoogleMapsMarkerOptions = {
            position: new GoogleMapsLatLng(Meteor.user().profile.location.lat, Meteor.user().profile.location.lng),
            title: 'Destination'
        };

        console.log('Création du marqueur.');

        this.map.addMarker(markerOptions).then((marker: GoogleMapsMarker) => {
            this.map.moveCamera(markerOptions.position);
            marker.showInfoWindow();
        });

        /*
         let modal = this.modalCtrl.create(NewTripPage);
         modal.present();*/
    }
}
