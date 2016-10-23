import React from 'react';
import { View, Text, ListView, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import TextWithStyle from './TextWithStyle.js';

const styles = StyleSheet.create({
    frame: {
        height: 150,
        marginHorizontal: 10,
        padding: 10
    },
});

class BusinessEntityListItemView extends React.Component {
    render() {
        return (
            <Image
                key={this.props.id}
                resizeMode="repeat"
                source={{uri: this.props.itemBackgroundURI}}
                style={styles.frame}
                >
                <TextWithStyle style={{fontSize: 24}}>{this.props.name}</TextWithStyle>
                <TextWithStyle>{this.props.categories.join(', ')}</TextWithStyle>
                <TextWithStyle>
                    {this._getDistance(this.props.currentPosition, this.props.coordinates)} ק״מ
                </TextWithStyle>
            </Image>
        );
    }

    _getDistance(currentPosition, businessCoords) {
        const x = Math.abs(currentPosition.coords.latitude - businessCoords.lat);
        const y = Math.abs(currentPosition.coords.longitude - businessCoords.lon);

        // Thanks, Pyhthagoras!
        return Math.round(Math.sqrt(x * x + y * y) * 100) / 100;
    }
}

export default BusinessEntityListItemView;