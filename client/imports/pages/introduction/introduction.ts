import {Component} from '@angular/core';
import template from './introduction.html';
import {NavController} from "ionic-angular";
import {RegisterPage} from "../register/register";

@Component({
    selector: 'introduction-page',
    template
})
export class IntroductionPage {
    slides = [
        {
            title: "Welcome to the Docs!",
            description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
            image: "ica-slidebox-img-1.png",
        },
        {
            title: "What is Ionic?",
            description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
            image: "ica-slidebox-img-2.png",
        },
        {
            title: "What is Ionic Cloud?",
            description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
            image: "ica-slidebox-img-3.png",
        }
    ];
    constructor(private navCtrl: NavController) {
    }

    register() {
        this.navCtrl.push(RegisterPage);
    }
}