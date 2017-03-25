import {Component} from '@angular/core';
import template from './register.html';
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";

@Component({
    template
})
export class RegisterPage {
    constructor(private navCtrl: NavController) {

    }

    register() {
        this.navCtrl.setRoot(HomePage).then(() => {
            console.log('ok');
        }).catch(e => {
            console.log(e);
        });
    }
}