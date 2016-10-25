import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import TextWithStyle from './TextWithStyle.js';

class TextRecord extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                alignItems: 'center',
                flexDirection: 'row-reverse',
                justifyContent: 'center'
            },
            checkbox: {
                height: 13,
                marginLeft: 5,
                width: 13
            },
            text: {
                flex: 1,
                fontWeight: 'bold'
            }
        });
        const iconSource = this.props.isChecked
            ? require('../assets/icons/checkbox_checked.png')
            : require('../assets/icons/checkbox_unchecked.png');

        return (
            <View style={styles.container}>
                <Image
                    source={iconSource}
                    style={styles.checkbox}
                    />
                <TextWithStyle style={styles.text}>{this.props.children}</TextWithStyle>
            </View>
        );
    }
}

export default TextRecord;