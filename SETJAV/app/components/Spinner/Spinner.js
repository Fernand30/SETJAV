import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import { colors } from '../../assets/styles';
import { Modal } from '../Modal/Modal';
import { PrimaryButton } from '../Buttons/Buttons';

const styles = StyleSheet.create({
    modal: {
        backgroundColor: colors.background.veryLight,
        borderRadius: 15,
    },
    container: {
        paddingTop: 10,
    },
    spinner: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredText: {
        textAlign: 'center',
        color: colors.text.dark,
    },
});

export class Spinner extends PureComponent {
    render() {
        const { animating, message, onCancel } = this.props;
        return (
            <Modal
                isOpen={animating}
                entry="top"
                onClose={() => onCancel()}
                height={130}
                width={0.7}
                style={styles.modal}
                backdropPressToClose={false}
                buttons={[<PrimaryButton
                    key="cancel"
                    title="Cancel"
                    onPress={() => onCancel()}
                />]}
            >
                <View style={styles.container}>
                    <Text style={styles.centeredText}>{message}</Text>
                    <ActivityIndicator
                        color={colors.text.dark}
                        animating={true}
                        style={styles.spinner}
                        size="large"
                    />
                </View>
            </Modal>
        );
    }
}

Spinner.defaultProps = {
    message: 'Loading, please wait...',
};

Spinner.propTypes = {
    message: PropTypes.string,
    animating: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
};
