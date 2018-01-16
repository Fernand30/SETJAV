import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import ModalBox from 'react-native-modalbox';
import Dimensions from 'Dimensions';

import {
    BackHandler, StyleSheet, View, ViewPropTypes, Text,
} from 'react-native';
import { dialog } from '../../assets/styles';

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 10,
    },
    headingContainer: {
        borderBottomWidth: dialog.headlineLineWidth,
        borderBottomColor: dialog.headlineLineColor,
        marginBottom: 10,
    },
    heading: {
        fontSize: dialog.headlineFontSize,
        paddingHorizontal: 15,
        paddingBottom: 3,
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        marginTop: 10,
        marginHorizontal: 15,
    },
});

export class Modal extends PureComponent {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);

        this.state = {
            keyboardState: false,
            keyboardSpace: 0,
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onClose);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onClose);
    }

    onClose() {
        if (this.props && this.props.isOpen && this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        const {
            isOpen, modalStyle, headerStyle, title, entry, position, animationDuration,
            buttons, height, width, backdropPressToClose, children,
        } = this.props;

        const modalHeight = height > 1 ? height : (Dimensions.get('window').height * height);
        const modalWidth = width > 1 ? width : (Dimensions.get('window').width * width);

        const keyboardStyle = this.state.keyboardState
            ? { top: -(this.state.keyboardSpace - modalHeight) } : {};

        return (
            <ModalBox
                isOpen={isOpen}
                entry={entry}
                backdropPressToClose={backdropPressToClose !== undefined
                    ? backdropPressToClose
                    : true}
                position={position}
                animationDuration={animationDuration}
                onClosed={() => this.onClose}
                backButtonClose={true}
                style={[{ height: modalHeight, width: modalWidth },
                    keyboardStyle, modalStyle || {}]
                }
            >
                <View style={styles.modal}>
                    {title &&
                    <View style={styles.headingContainer}>
                        <Text style={[styles.heading, headerStyle]}>{title}</Text>
                    </View>
                    }
                    <View style={styles.bodyContainer}>
                        {children}
                    </View>
                    {buttons &&
                    <View style={styles.footerContainer}>
                        {buttons}
                    </View>
                    }
                </View>
            </ModalBox>
        );
    }
}

Modal.defaultProps = {
    title: null,
    entry: 'top',
    position: 'center',
    modalStyle: {},
    headerStyle: {},
    animationDuration: 400,
    buttons: [],
    backdropPressToClose: false,
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    modalStyle: ViewPropTypes.style, // eslint-disable-line
    headerStyle: PropTypes.object, // eslint-disable-line
    title: PropTypes.string,
    entry: PropTypes.string,
    position: PropTypes.string,
    animationDuration: PropTypes.number,
    buttons: PropTypes.array, // eslint-disable-line
    backdropPressToClose: PropTypes.bool,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.object, // eslint-disable-line
};
