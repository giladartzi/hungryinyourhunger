import React from 'react';
import { View, Image, StyleSheet, Dimensions, Linking, TouchableHighlight } from 'react-native';

class BusinessEntityMap extends React.Component {
    render() {
        const width = Dimensions.get('window').width - 40;
        const height = Math.floor(width / 2)
        const styles = StyleSheet.create({
            map: {
                bottom: 0,
                left:0,
                position: 'absolute',
                right: 0,
                top: 0
            },
            mapWrapper: {
                borderWidth: 1,
                borderColor: '#f0f0f0',
                flex: 1,
                height: height,
                position: 'relative',
                width: width
            }
        })

        return <TouchableHighlight
            onPress={() => Linking.openURL(this._getExternalMapURI(this.props.coordinates.lat, this.props.coordinates.lon, this.props.name))}
        >
            <View style={styles.mapWrapper}>
                <Image
                    resizeMode="contain"
                    source={{uri: this._getMapImageAddress(this.props.coordinates.lat, this.props.coordinates.lon, width, height)}}
                    style={styles.map}
                />
            </View>
        </TouchableHighlight>
    }

    _getMapImageAddress(lat, lon, width, height) {
        return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=16&scale=false&size=${width}x${height}&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xfb0200%7Clabel:%7C${lat},${lon}`;
    }

    _getExternalMapURI(lat, lon, name) {
        return `http://maps.apple.com/?ll=${lat},${lon}&q=${name}`;
    }
}

export default BusinessEntityMap;