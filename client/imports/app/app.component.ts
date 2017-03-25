import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {HomePage} from "../pages/home/home";
import {FriendsPage} from '../pages/friends/friends';
import {IntroductionPage} from "../pages/introduction/introduction";
import template from "./app.html";

@Component({
    template
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = IntroductionPage;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Introduction', component: IntroductionPage},
            {title: 'Accueil', component: HomePage},
            {title: 'Amis', component: FriendsPage}
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