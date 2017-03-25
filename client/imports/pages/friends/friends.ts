import {Component} from '@angular/core';
import {NavController, ActionSheetController} from 'ionic-angular';
import template from './friends.html';

@Component({
    template
})
export class FriendsPage {
    constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
    }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Actions de l’ami',
            buttons: [
                {
                    text: 'Profil',
                    handler: () => {
                        console.log('Profil');
                    }
                },
                {
                    text: 'Messages',
                    handler: () => {
                        console.log('Messages');
                    }
                },
                {
                    text: 'Supprimer',
                    role: 'destructive',
                    handler: () => {
                        console.log('Supprimer');
                    }
                }
            ]
        });
        actionSheet.present();
    }
}

