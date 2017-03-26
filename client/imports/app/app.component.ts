import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {HomePage} from "../pages/home/home";
import {FriendsPage} from '../pages/friends/friends';
import {IntroductionPage} from "../pages/introduction/introduction";
import template from "./app.html";
import {ProfilePage} from "../pages/profile/profile";
import {SettingsPage} from "../pages/settings/settings";
import {AboutPage} from "../pages/settings/about/about";
import {ChatPage} from "../pages/chat/chat";
import {TripsPage} from "../pages/trips/trips";
import {NewTripPage} from "../pages/new-trip/new-trip";
import {Meteor} from "meteor/meteor";
import {MapPage} from "../pages/map/map";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";
import {LoginPage} from "../pages/login/login";

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
            {title: 'Profil', component: ProfilePage},
            {title: 'Nouveau trajet', component: NewTripPage},
            {title: 'Éditer le profil', component: EditProfilePage},
            {title: 'Connexion', component: LoginPage}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
