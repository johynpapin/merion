import {MongoObservable} from 'meteor-rxjs';
import {Trip} from '../models';

export const Trips = new MongoObservable.Collection<Trip>('trips');