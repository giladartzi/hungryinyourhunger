import React from 'react';
import { View, Text, ListView, StyleSheet, Image, TouchableHighlight } from 'react-native';
import TextWithStyle from './TextWithStyle.js';
import Card from './Card.js';
import GeoMath from '../utils/GeoMath.js';

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    imageContainer: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: 'relative'
    },
    clickableArea: {
        marginHorizontal: 10,
        marginTop: 10
    },
});

class BusinessEntityListItemView extends React.Component {
    render() {
        const distance = Math.round(GeoMath.haversine(this.props.currentPosition, this.props.coordinates) * 100) / 100;
        return (
            <TouchableHighlight onPress={this.props.onSelect} style={styles.clickableArea}>
                <Card
                    key={this.props.id}
                    >
                    <View style={styles.imageContainer}>
                        <Image source={{uri: this.props.itemBackgroundURI}} resizeMode="cover" style={styles.image} />
                    </View>
                    <View>
                        <TextWithStyle style={{fontSize: 24}}>{this.props.name}</TextWithStyle>
                        <View style={{flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between'}}>
                            <TextWithStyle>{this.props.categories.join(', ')}</TextWithStyle>
                            <View style={{flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Image source={require('../assets/icons/distance_icon.png')} style={{width: 8, height: 8, marginLeft: 3}} />
                                <TextWithStyle>{distance} ק״מ</TextWithStyle>
                            </View>
                        </View>
                    </View>
                </Card>
            </TouchableHighlight>
        );
    }
}

export default BusinessEntityListItemView;