import React from 'react';
import { View, Text } from 'react-native';

class BusinessEntityDetailsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>{JSON.stringify(this.props.businessEntity)}</Text>
            </View>
        );
    }
}

BusinessEntityDetailsView.displayName = 'BusinessEntityDetailsView';

export default BusinessEntityDetailsView;