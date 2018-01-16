import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import {
    Image, StyleSheet, TouchableOpacity, View,
} from 'react-native';

import { colors } from '../../../assets/styles';
import { TAB_ICONS } from '../../../assets';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopColor: colors.border.menu,
        borderTopWidth: 0.5,
        borderBottomColor: colors.border.menu,
        borderBottomWidth: 0.5,
        backgroundColor: colors.background.veryLight,
    },
});

export class TabBar extends PureComponent {
    renderButtons(routes) {
        const activeIndex = this.props.navigationState.index;
        return routes.map((route, index) => (
            <TouchableOpacity
                key={`${route.key}_${index}`}
                style={{ flex: 1 }}
                activeOpacity={0.5}
                onPress={() => {
                    if (route.openDrawer) {
                        Actions.drawerOpen();
                    } else {
                        Actions[route.key]();
                    }
                }}
            >
                <Image
                    style={{ alignSelf: 'center', width: 35 }}
                    resizeMode="contain"
                    source={TAB_ICONS(activeIndex === index ? `${route.key}-selected` : `${route.key}`)}
                />
            </TouchableOpacity>
        ));
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderButtons(this.props.navigationState.routes, true)}
                {this.renderButtons([{ key: 'more', openDrawer: true }], false)}
            </View>
        );
    }
}

TabBar.propTypes = {
    navigationState: PropTypes.shape({
        index: PropTypes.number,
        routes: PropTypes.array,
    }).isRequired,
};
