import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderColor: '#f8f8f8',
        borderRadius: 2,
        borderWidth: 1,
        padding: 10,
        shadowColor: '#888',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
});

class Card extends React.Component {
    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        const customStyle = this.props.style || {};

        return <View
            {...this.props}
            ref={component => this._root = component}
            style={[styles.card, customStyle]}
            />;
    }
}

export default Card;