import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HomePage} from '../pages/home/home';
import {IntroductionPage} from "../pages/introduction/introduction";
import {FriendsPage} from "../pages/friends/friends";
import {MyApp} from './app.component';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        IntroductionPage,
        FriendsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        IntroductionPage,
        FriendsPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}