import {Component} from '@angular/core';
import template from './register.html';
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
    template
})
export class RegisterPage {
    private registerForm: FormGroup;

    constructor(private navCtrl: NavController, private formBuilder: FormBuilder) {
        this.registerForm = this.formBuilder.group({
            nickname: ['', Validators.required],
            lastname: ['', Validators.required],
            firstname: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required]
        });
    }

    register() {
        console.log(this.registerForm.value);
    }
}