import {Component} from '@angular/core';
import {ActionSheetController, NavController} from 'ionic-angular';
import {ChatPage} from '../chat/chat';
import {ProfilePage} from '../profile/profile';
import template from './friends.html';

@Component({
    selector: 'friends-page',
    template
})
export class FriendsPage {
    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController) {
    }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Actions de l’ami',
            buttons: [
                {
                    text: 'Profil',
                    handler: () => { this.showProfile(); }
                },
                {
                    text: 'Messages',
                    handler: () => { this.showChat(); }
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

	showChat() {
		this.navCtrl.push(ChatPage);
	}

	showProfile() {
		this.navCtrl.push(ProfilePage);
	}
}

