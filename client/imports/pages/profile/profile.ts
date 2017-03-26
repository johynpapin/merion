import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EditProfilePage} from '../edit-profile/edit-profile';
import template from './profile.html';

@Component({
    selector: 'profile-page',
    template
})
export class ProfilePage {
    constructor(public navCtrl: NavController) {

    }

	showEditProfile () {
		this.navCtrl.push(EditProfilePage);
	}
}
