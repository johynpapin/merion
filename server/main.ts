import {Meteor} from 'meteor/meteor';
import {Location} from '../imports/models';

Meteor.startup(() => {
    // code to run on server at startup
});

Meteor.methods({
    'updateLocation'(location: Location) {
        if (Meteor.userId() !== null) {
            Meteor.users.update(Meteor.userId(), {
                $set: {
                    'profile.location': location
                }
            });
            console.log();
            console.log('HÉ ! HÉ ! !!! JE SUIS LÀ !!! TOC TOC TOC ! HÉ ! OH ! HÉ !!!!!!  ON VA AVOIR UN CASUS BELLI LÀ WESH !' + Meteor.userId() + ' at : ' + JSON.stringify(location));
            console.log();
        } else {
            console.log('A disconnected user tried to update location without being connected.');
        }
    }
});