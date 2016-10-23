import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);

        console.log(props.businessEntities);
    }

    render() {
        return (
            <View>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

App.displayName = 'App';

function mapStateToProps(state) {
    return {
        businessEntities: state.businessEntities.businessEntities
    }
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);