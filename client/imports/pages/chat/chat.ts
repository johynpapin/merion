import {Component} from '@angular/core';
import {ActionSheetController} from 'ionic-angular';
import template from './chat.html';

@Component({
    selector: 'chat-page',
    template
})
export class ChatPage {
    constructor(public actionSheetCtrl: ActionSheetController) {
    }
}

