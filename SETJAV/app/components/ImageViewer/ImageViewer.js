import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import PhotoView from 'react-native-photo-view';

import * as Navigation from 'react-native-router-flux';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});

export class ImageViewer extends PureComponent {
    componentDidMount() {
        if (this.props.title) {
            Navigation.Actions.refresh({
                title: this.props.title,
            });
        }
    }

    render() {
        const { source } = this.props;
        const { width } = Dimensions.get('window');

        return (
            <View style={styles.container}>
                <PhotoView
                    source={source}
                    minimumZoomScale={0.5}
                    maximumZoomScale={3}
                    androidScaleType="center"
                    style={{ width: width - 20, height: 300 }}
                />
            </View>
        );
    }
}

ImageViewer.propTypes = {
    title: PropTypes.string.isRequired,
    source: PropTypes.object.isRequired, // eslint-disable-line
};
