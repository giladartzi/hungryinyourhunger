import React from 'react';
import { View, Text } from 'react-native';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

Index.displayName = 'Index';

export default Index;