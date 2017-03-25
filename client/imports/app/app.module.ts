import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HomePage} from '../pages/home/home';
import {IntroductionPage} from "../pages/introduction/introduction";
import {FriendsPage} from "../pages/friends/friends";
import {MyApp} from './app.component';
import {ProfilePage} from "../pages/profile/profile";
import {SettingsPage} from "../pages/settings/settings";
import {ChatPage} from "../pages/chat/chat";
import {RegisterPage} from "../pages/register/register";
import {TripsPage} from "../pages/trips/trips";
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
        ChatPage,
        RegisterPage,
        TripsPage,
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
        ChatPage,
        RegisterPage,
        TripsPage,
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