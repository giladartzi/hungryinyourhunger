import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    childContainer: {
        alignItems: 'flex-end',
        borderWidth: 1,
        flex: 1
    },
    topHeader: {
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        height: 30,
        flex: 1,
        flexDirection: 'row-reverse',
        left: 0,
        position: 'absolute',
        right: 0,
        shadowColor: '#888',
        shadowOffset: {
            height: 4,
            width: 0
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        zIndex: 1000
    },
    topHeaderChildrenContainer: {
        flexDirection: 'row-reverse',
    },
    topHeaderSubContainer: {
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },
    titleText: {
        fontSize: 24,
        textAlign: 'center',
    }
});

class TopHeader extends React.Component {
    render() {
        const customStyle = StyleSheet.create({custom: this.props.style || {}});
        const title = this.props.title ? <Text style={styles.titleText}>{this.props.title}</Text> : null;

        return (
            <View {...this.props} style={[styles.topHeader, customStyle.custom]}>
                <View style={styles.topHeaderSubContainer}>{title}</View>
                <View  style={[styles.topHeaderSubContainer, styles.topHeaderChildrenContainer]}>
                    <View style={styles.childContainer}>{this.props.children}</View>
                    <View style={styles.childContainer}></View>
                </View>
            </View>
        );
    }
}

export default TopHeader;

