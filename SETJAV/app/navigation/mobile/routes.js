import React from 'react';
import {
    ActionConst, Overlay, Scene, Stack,
} from 'react-native-router-flux';

import { colors, fonts } from '../../assets/styles';
import backButtonImage from '../../assets/images/icons/arrow-left-white-@x3.png';

// Navigation components

import { Loading } from '../../features/loading';
import { Home } from '../../features/home';

const navigationButtonStyle = () => ({
    fontFamily: fonts.light,
    fontSize: 16,
    color: colors.text.dark,
});

export const mobileRoutes = (
    <Overlay>
        <Stack
            key="root"
            hideNavBar
            hideTabBar
            backButtonImage={backButtonImage}
            backButtonTextStyle={navigationButtonStyle}
            leftButtonTextStyle={navigationButtonStyle}
            rightButtonTextStyle={navigationButtonStyle}
        >
            <Scene key="publicContent" type={ActionConst.RESET}>
                <Scene key="root" hideTabBar hideNavBar>
                    <Scene key = "loading" component = {Loading} hideNavBar={true} {...this.props} initial />
                    <Scene key = "home" component = {Home} hideNavBar={true} panHandlers={null} />
                </Scene>
            </Scene>

        </Stack>
    </Overlay>
);
