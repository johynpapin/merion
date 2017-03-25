import {Meteor} from 'meteor/meteor';
import {Location} from '../imports/models';

Meteor.startup(() => {
    // code to run on server at startup
});

Meteor.methods({
    'updateLocation'(location: Location) {
        Meteor.users.update(Meteor.userId(), {
            $set: {
                'profile.location': location
            }
        });
    }
});