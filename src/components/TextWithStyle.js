import React from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    texts: {
        backgroundColor: 'transparent',
        color: '#fff',
        textAlign: 'right',
    },
});

class TextWithStyle extends React.Component {
    render() {
        const customStyle = StyleSheet.create({texts: this.props.style || {}});

        return <Text {...this.props} style={[styles.texts, customStyle.texts]} />;
    }
}

export default TextWithStyle;