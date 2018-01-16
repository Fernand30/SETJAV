import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet, View, Text,
} from 'react-native';

import { fonts, colors } from '../../../../../assets/styles';

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    itemText: {
        fontFamily: fonts.demi,
        fontSize: 16,
        color: colors.text.dark,
    },
});

export class ExampleItem extends PureComponent {

    goAction(){

    }
    
    render() {
        const { item } = this.props;

        return (
            <View style={styles.container}>
                <Text
                    style={styles.itemText} onPress={this.goAction()}
                >
                    {item.title}
                </Text>
            </View>
        );
    }
}

ExampleItem.propTypes = {
    item: PropTypes.object.isRequired, // eslint-disable-line
};
