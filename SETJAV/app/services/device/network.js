import Rx from 'rxjs/Rx';
import { NetInfo } from 'react-native';

let isConnected = false;

const connectionStream = Rx.Observable.create((obs) => {
    NetInfo.isConnected.fetch().then((isConnected) => {
        obs.next(isConnected);
        return isConnected;
    }).done(() => {
        NetInfo.isConnected.addEventListener('connectionChange', (result) => {
            obs.next(result);
        });
    });
})
    .publishReplay(1).refCount();

connectionStream.subscribe((result) => {
    isConnected = result;
});

export default {
    connectionStream,
    isConnected: () => isConnected,
};
