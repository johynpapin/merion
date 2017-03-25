import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen, Geolocation, GeolocationOptions, Geoposition} from 'ionic-native';
import {HomePage} from "../pages/home/home";
import {FriendsPage} from '../pages/friends/friends';
import {IntroductionPage} from "../pages/introduction/introduction";
import template from "./app.html";
import {ProfilePage} from "../pages/profile/profile";
import {SettingsPage} from "../pages/settings/settings";
import {ChatPage} from "../pages/chat/chat";
import {TripsPage} from "../pages/trips/trips";
import {Meteor} from "meteor/meteor";
import {MapPage} from "../pages/map/map";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";

@Component({
    template
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = IntroductionPage;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform) {
        if (Meteor.userId()) {
            this.rootPage = HomePage;
        }

        this.initializeApp();
        // used for an example of ngFor and navigation

        this.pages = [
            {title: 'Introduction', component: IntroductionPage},
            {title: 'Accueil', component: HomePage},
            {title: 'Amis', component: FriendsPage},
            {title: 'Profil', component: ProfilePage},
            {title: 'Réglages', component: SettingsPage},
            {title: 'Chat', component: ChatPage},
            {title: 'Trajets', component: TripsPage},
            {title: 'Carte', component: MapPage},
            {title: 'Éditer le profil', component: EditProfilePage}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();

            let geolocationOptions: GeolocationOptions = {
                enableHighAccuracy: true
            };

            Geolocation.watchPosition(geolocationOptions).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
                console.log(position);
                Meteor.call('updateLocation', position, (e) => {
                    if (e) {
                        return console.error(e);
                    }
                    console.log('Location updated');
                });
            });
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}