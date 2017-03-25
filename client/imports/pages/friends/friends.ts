import {Component} from '@angular/core';
import {ActionSheetController} from 'ionic-angular';
import template from './friends.html';

@Component({
    template
})
export class FriendsPage {
    constructor(public actionSheetCtrl: ActionSheetController) {
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
                    text: 'Chatter',
                    handler: () => {
                        console.log('Chatter');
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

