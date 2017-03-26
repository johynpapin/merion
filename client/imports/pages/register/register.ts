import {Component} from '@angular/core';
import template from './register.html';
import {NavController, ToastController, LoadingController} from "ionic-angular";
import {HomePage} from "../home/home";
import {LoginPage} from '../login/login';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Accounts} from "meteor/accounts-base";

@Component({
    selector: 'register-page',
    template
})
export class RegisterPage {
    private registerForm: FormGroup;

    constructor(private navCtrl: NavController, private formBuilder: FormBuilder, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
        this.registerForm = this.formBuilder.group({
            nickname: ['', Validators.required],
            lastname: ['', Validators.required],
            firstname: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required] // TODO : vérifier que le re soit égal au mot de passe
        });
    }

    register() {
        let v = this.registerForm.value;

        let loading = this.loadingCtrl.create({
            content: 'Inscription en cours...'
        });

        loading.present();

        Accounts.createUser({
            username: v.nickname,
            email: v.email,
            password: v.password,
            profile: {
                lastName: v.lastname,
                firstName: v.firstname
            }
        }, (e) => {
            loading.dismiss();
            if (e) {
                let toast = this.toastCtrl.create({
                    message: 'Erreur : ' + e,
                    duration: 3000,
                    showCloseButton: true
                });
                toast.present();
            } else {
                let toast = this.toastCtrl.create({
                    message: 'Vous êtes désormais inscrit, bienvenue !',
                    duration: 3000,
                    showCloseButton: true
                });
                toast.present();
                this.navCtrl.setRoot(HomePage);
            }
        });
    }

	login() {
		this.navCtrl.push(LoginPage);
	}
}
