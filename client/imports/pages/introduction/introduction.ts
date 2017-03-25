ttimport {Component} from '@angular/core';
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
            title: "Merion",
            description: "<strong>Merion</strong> est une application sociale permettant de partager vos petits trajets, à pied ou à vélo.",
            image: "ica-slidebox-img-1.png",
        },
        {
            title: "Comment ça marche ?",
            description: "Inscrivez-vous, et vous verrez autour de vous les lieux vers lesquels les membres souhaitent se rendre. Cliquez, rencontrez-vous à mi-chemin, et faites le reste du trajet ensemble.",
            image: "ica-slidebox-img-2.png",
        },
        {
            title: "Des rencontres",
            description: "À mi-chemin, une notification vous indiquera un mot de passe, pour vous aider à identifier votre « contact ». Discutez, marchez ou roulez !",
            image: "ica-slidebox-img-3.png",
        }
    ];
    constructor(private navCtrl: NavController) {
    }

    register() {
        this.navCtrl.push(RegisterPage);
    }
}
