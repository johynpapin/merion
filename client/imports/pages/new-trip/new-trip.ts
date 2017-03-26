import {Component} from '@angular/core';
import template from './new-trip.html';
import {NavParams, LoadingController, NavController, ToastController} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    template
})
export class NewTripPage {
    private tripForm: FormGroup;

    constructor(private params: NavParams, private navCtrl: NavController, private formBuilder: FormBuilder, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
        this.tripForm = this.formBuilder.group({
            transport: ['', Validators.required],
            date: ['', Validators.required]
        });
    }

    create() {
        let v = this.tripForm.value;

        let loading = this.loadingCtrl.create({
            content: 'Enregistrement en cours...'
        });

        loading.present();

        Meteor.call('newTrip', {
            transport: v.transport,
            date: v.date,
            destination: this.params.get('destination')
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
                    message: 'Enregistrement terminé avec succès.',
                    duration: 3000,
                    showCloseButton: true
                });
                toast.present();
                this.navCtrl.pop();
            }
        });
    }
}
