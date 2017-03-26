import {Meteor} from 'meteor/meteor';
import {Location, Trip} from '../imports/models';
import {Trips} from '../imports/collections';

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
        } else {
            console.log('A disconnected user tried to update location without being connected.');
        }
    },
    'newTrip'(data: any) {
        if (data.transport && data.date && data.destination) {
            HTTP.call("GET", "https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
                params: {
                    key: "AIzaSyD9RGaIOhX-w3895hwXEAa3JDO3wHmJK8Y",
                    location: data.destination.lat + ',' + data.destination.lng,
                    radius: 1000
                }
            }, (r, e) => {
                console.log(JSON.stringify(r));
                console.log(e);
            });
            console.log('ok');
        } else {
            throw new Meteor.Error('500',
                'Il manque plusieurs données importantes.');
        }
    }
});