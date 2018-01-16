import Rx from 'rxjs/Rx';
import { PermissionsAndroid, Platform } from 'react-native';

const { Observable, Subject } = Rx;
let watchPosition = null;
const geoLocation$ = new Subject();

const requestAccessFineLocation = () => {
    if (Platform.OS === 'ios') return Promise.resolve(true);

    try {
        return PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'GPS Location Permission',
                message: 'We need to access your location to use within maps.',
            },
        ).then(granted => granted === PermissionsAndroid.RESULTS.GRANTED);
    } catch (err) {
        return Promise.reject(err);
    }
};

const startLocationUpdates = () => {
    requestAccessFineLocation()
        .then((granted) => {
            if (!granted) return;

            watchPosition = navigator.geolocation.watchPosition(
                (position) => {
                    geoLocation$.next({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        speed: position.coords.speed,
                    });
                },
                () => {},
                {
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 1000,
                },
            );
        });
};

const stopLocationUpdates = () => {
    if (watchPosition !== null) navigator.geolocation.clearWatch(watchPosition);
};

const geoLocationStream$ = geoLocation$.publishReplay(1).refCount();

const getCurrentLocation = () =>
    Observable.create((obs) => {
        requestAccessFineLocation()
            .then((granted) => {
                if (!granted) return;

                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        obs.next({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                    },
                    error => obs.next({ error: error.message }),
                    {
                        enableHighAccuracy: true,
                        timeout: 20000,
                        maximumAge: 1000,
                    },
                );
            });
    });

export default {
    geoLocation$: geoLocationStream$,
    startLocationUpdates,
    stopLocationUpdates,
    getCurrentLocation,
};
