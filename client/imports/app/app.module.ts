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

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        IntroductionPage,
        FriendsPage,
        ProfilePage,
        SettingsPage,
        ChatPage,
        RegisterPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
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
        RegisterPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}