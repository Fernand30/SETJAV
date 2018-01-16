import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';

import { colors, fonts } from '../../assets/styles';

import * as ModalDialogActions from '../../appData/actions/modalDialog';
import { MODAL_DIALOG } from '../../appData/constants';
import { DIALOG_TYPES } from '../../appData/constants/modalDialog';
import { PrimaryButton, Modal, Spinner } from '../../components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    messageText: {
        fontFamily: fonts.light,
        fontSize: 16,
        lineHeight: 22,
        color: colors.text.dark,
        textAlign: 'center',
    },
    buttonText: {
        fontFamily: fonts.regular,
        fontSize: 16,
        color: colors.text.dark,
        textAlign: 'center',
    },
});

class ModalDialog extends PureComponent {
    render() {
        const { model, closeDialog, closeSpinner } = this.props;

        const buttons = [];
        switch (model.get('dialogType')) {
            case DIALOG_TYPES.CONFIRMATION:
                buttons.push(<PrimaryButton
                    key="no"
                    title="No"
                    onPress={() => {
                        closeDialog();
                        if (model.get('cancelFunc')) model.get('cancelFunc')();
                    }}
                />);

                buttons.push(<PrimaryButton
                    key="yes"
                    title="Yes"
                    onPress={() => {
                        closeDialog();
                        if (model.get('acceptFunc')) model.get('acceptFunc')();
                    }}
                />);
                break;

            case DIALOG_TYPES.MESSAGE:
                buttons.push(<PrimaryButton
                    key="close"
                    title="Close"
                    onPress={() => {
                        closeDialog();
                        if (model.get('cancelFunc')) model.get('cancelFunc')();
                    }}
                />);
                break;
            default:
                break;
        }

        if (model.get('isDialogOpen') || model.get('isSpinnerOpen')) {
            return (
                <View style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                }}
                >
                    {(model.get('dialogType') === DIALOG_TYPES.SPINNER && model.get('isSpinnerOpen')) &&
                    <Spinner
                        animating={true}
                        message={model.get('message')}
                        onCancel={() => {
                            closeSpinner();
                            if (model.get('cancelFunc')) model.get('cancelFunc')();
                        }}
                    />
                    }

                    {(model.get('dialogType') !== DIALOG_TYPES.SPINNER) &&
                    <Modal
                        isOpen={model.get('isDialogOpen')}
                        title={model.get('title') || ''}
                        onClose={() => {
                            closeDialog();
                            if (model.get('cancelFunc')) model.get('cancelFunc')();
                        }}
                        animationDuration={model.get('animationDuration') ? parseInt(model.get('animationDuration'), 10) : 400}
                        height={model.get('height') || 150}
                        width={300}
                        buttons={buttons}
                    >
                        {model.get('message') &&
                        <Text
                            style={[styles.messageText, model.get('messageStyle') ? model.get('messageStyle') : {}]}
                        >
                            {model.get('message')}
                        </Text>
                        }
                    </Modal>
                    }
                </View>
            );
        }
        return <View />;
    }
}

ModalDialog.propTypes = {
    model: PropTypes.object.isRequired, // eslint-disable-line
    closeDialog: PropTypes.func.isRequired,
    closeSpinner: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ model: state.getIn(MODAL_DIALOG) });
const mapDispatchToProps = dispatch => (bindActionCreators(ModalDialogActions, dispatch));

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ModalDialog);
