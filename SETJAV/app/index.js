import Rx from 'rxjs/Rx';
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Reducer, Router } from 'react-native-router-flux';
import { Alert, BackHandler, View, StatusBar } from 'react-native';
import { lockToPortrait } from 'react-native-orientation';
import OneSignal from 'react-native-onesignal';
import SplashScreen from 'rn-splash-screen';
import RNRestart from 'react-native-restart';
import { setJSExceptionHandler } from 'react-native-exception-handler';

import ModalDialog from './navigation/mobile/modal';

import { database } from './services';
import { store } from './store';
import { mobileRoutes } from './navigation/mobile/routes';

OneSignal.inFocusDisplaying(2);

setJSExceptionHandler((e, isFatal) => {
    if (isFatal) {
        Alert.alert(
            'Unexpected error occurred',
            `
            We have reported this error to our team and will now restart the app.
            `,
            [{
                text: 'Restart',
                onPress: () => RNRestart.Restart(),
            }],
        );
    }
});

const notificationData$ = new Rx.ReplaySubject(1);
OneSignal.addEventListener('ids', data => notificationData$.next(data));

export class App extends PureComponent {
    static getSceneStyle() {
        return {
            shadowOpacity: 0.8,
            shadowRadius: 1,
            backgroundColor: '',
        };
    }

    constructor(props) {
        super(props);

        this.lastRoute = null;
    }

    componentWillMount() {
        StatusBar.setHidden(false);
        StatusBar.setBarStyle('light-content');

        lockToPortrait();
    }

    componentDidMount() {
        database.initialise()
            .subscribe(() => setTimeout(() => SplashScreen.hide(), 500));
    }

    reducerCreate(params) {
        const defaultReducer = new Reducer(params);
        return (newState, action) => {
            if (action.type.includes('/BACK') && (this.lastRoute === 'homeBase' || this.lastRoute === 'loginBase')) {
                BackHandler.exitApp();
            } else if (action.type === 'REACT_NATIVE_ROUTER_FLUX_FOCUS') {
                this.lastRoute = action.routeName;
            }

            return defaultReducer(newState, action);
        };
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Router createReducer={this.reducerCreate} getSceneStyle={this.getSceneStyle}>
                        {mobileRoutes}
                    </Router>

                    <ModalDialog />
                </View>
            </Provider>
        );
    }
}
