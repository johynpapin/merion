import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HomePage} from '../pages/home/home';
import {IntroductionPage} from "../pages/introduction/introduction";
import {FriendsPage} from "../pages/friends/friends";
import {MyApp} from './app.component';
import {ProfilePage} from "../pages/profile/profile";
import {SettingsPage} from "../pages/settings/settings";
import {AboutPage} from "../pages/settings/about/about";
import {ChatPage} from "../pages/chat/chat";
import {RegisterPage} from "../pages/register/register";
import {TripsPage} from "../pages/trips/trips";
import {NewTripPage} from "../pages/new-trip/new-trip";
import {TripEndPage} from "../pages/trip-end/trip-end";
import {AgmCoreModule} from 'angular2-google-maps/core';
import {MapPage} from "../pages/map/map";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";
import {LoginPage} from "../pages/login/login";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        IntroductionPage,
        FriendsPage,
        ProfilePage,
        SettingsPage,
		AboutPage,
        ChatPage,
        RegisterPage,
        TripsPage,
		NewTripPage,
		TripEndPage,
        MapPage,
        EditProfilePage,
        LoginPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        IntroductionPage,
        FriendsPage,
        ProfilePage,
        SettingsPage,
		AboutPage,
        ChatPage,
        RegisterPage,
        TripsPage,
		NewTripPage,
		TripEndPage,
        MapPage,
        EditProfilePage,
        LoginPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
