import {Component} from '@angular/core';
import template from './login.html';
import {NavController, ToastController, LoadingController} from "ionic-angular";
import {HomePage} from "../home/home";
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Accounts} from "meteor/accounts-base";

@Component({
    selector: 'register-page',
    template
})
export class LoginPage {
    private loginForm: FormGroup;

    constructor(private navCtrl: NavController, private formBuilder: FormBuilder, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
        this.loginForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        let v = this.loginForm.value;

        let loading = this.loadingCtrl.create({
            content: 'Connexion en cours...'
        });

        loading.present();
/*
        Accounts.loginin({
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
        });*/
    }
}