import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
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

    constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    }

    ngAfterViewInit() {
        this.loadMap();
    }

    loadMap() {
        let element: HTMLElement = document.getElementById('map');

        this.map = new GoogleMap(element);

        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
            this.map.addMarker({
                position: new GoogleMapsLatLng(0, 0),
                title: 'Réglage de la destination',
                snippet: 'Pressez-moi longtemps pour me déplacer.',
                icon: 'gray',
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

            Meteor.users.find({}).observeChanges({
                changed(id, fields) {
                }
            });

            let this_ = this;

            Trips.find({}).observe({
                added(trip: Trip) {
                    console.log('Pouf pouf pouf');
                    const own = trip.owner === Meteor.userId();
                    const want = trip.users.indexOf(Meteor.userId()) > -1;
                    this_.map.addMarker({
                        position: new GoogleMapsLatLng(trip.destination.lat, trip.destination.lng),
                        title: own ? 'Je participe !' : want ? 'Je suis intéressé.' : 'Destination disponible',
                        snippet: 'Si vous êtes intéressé, cliquez sur cette bulle.',
                        icon: own ? 'yellow' : want ? '#008ed6' : 'red',
                        infoClick: function() {
                            this_.map.setClickable(false);
                            let alert = this.alertCtrl.create({
                                title: 'Rejoindre un trajet',
                                message: 'Êtes-vous sûr de vouloir rejoindre ce trajet ?',
                                buttons: [
                                    {
                                        text: 'Non',
                                        role: 'cancel',
                                        handler: () => {
                                            console.log('Cancel clicked');
                                            this_.map.setClickable(true);
                                        }
                                    },
                                    {
                                        text: 'Oui',
                                        handler: () => {
                                            console.log('Buy clicked');
                                            this_.map.setClickable(true);
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        }
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
