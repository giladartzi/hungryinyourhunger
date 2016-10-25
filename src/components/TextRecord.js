import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import TextWithStyle from './TextWithStyle.js';

class TextRecord extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row-reverse',
                justifyContent: 'center'
            },
            key: {
                fontWeight: 'bold',
                textAlign: 'left',
                minWidth: 90
            },
            value: {
                flex: 1,
                marginRight: 5
            },
            valueClickable: {
                textDecorationLine  : 'underline'
            }
        });

        let recordValue;
        if (this.props.onPress) {
            recordValue = <TouchableHighlight onPress={this.props.onPress} style={styles.value}>
                <View>
                    <TextWithStyle style={styles.valueClickable}>
                        {this.props.recordValue}
                    </TextWithStyle>
                </View>
            </TouchableHighlight>
        } else {
            recordValue = <TextWithStyle style={styles.value}>
                {this.props.recordValue}
            </TextWithStyle>
        }

        return (
            <View style={styles.container}>
                <TextWithStyle style={styles.key}>{this.props.recordKey}:</TextWithStyle>
                {recordValue}
            </View>
        );
    }
}

export default TextRecord;