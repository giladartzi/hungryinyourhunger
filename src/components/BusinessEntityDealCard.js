import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Card from './Card.js';
import TextWithStyle from './TextWithStyle';

class BusinessEntityDealCard extends React.Component {
    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        const styles = StyleSheet.create({
            crownImage: {
                height: 26,
                width: 36
            },
            detailsCard: {
                alignItems: 'center',
                flexDirection: 'row-reverse',
                justifyContent: 'space-around',
                marginHorizontal: 10,
                marginTop: 10
            },
            text: {
                flex: 1,
                fontSize: 24,
                marginHorizontal: 11,
                textAlign: 'center'
            }
        });

        return <Card style={styles.detailsCard}>
            <Image style={styles.crownImage} source={require('../assets/icons/crown.png')} />
            <TextWithStyle style={styles.text}>{this.props.children}</TextWithStyle>
            <Image style={styles.crownImage} source={require('../assets/icons/crown.png')} />
        </Card>;
    }
}

export default BusinessEntityDealCard