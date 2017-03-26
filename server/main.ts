import {Meteor} from 'meteor/meteor';
import {Location, Trip} from '../imports/models';
import {Trips} from '../imports/collections';
import {GooglePlaces} from 'node-googleplaces';

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
            const places = new GooglePlaces("AIzaSyD9RGaIOhX-w3895hwXEAa3JDO3wHmJK8Y");
            const params = {

                location: data.destination.latitude + ',' + data.destination.longitude,
                radius: 1000 // TODO : réglage sur ce point
            };
            places.nearbySearch(params).then((res) => {
                console.log(res.body);
            });
        } else {
            throw new Meteor.Error('500',
                'Il manque plusieurs données importantes.');
        }
    }
});