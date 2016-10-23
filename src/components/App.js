import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Animated, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import BusinessEntitiesListView from './BusinessEntitiesListView.js';
import BusinessEntityDetailsView from './BusinessEntityDetailsView.js';
import { LIST, DETAILS, NAVIGATE, BACK } from '../reducers/navigationReducer';
import _ from 'lodash';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.getDisplayableView = this.getDisplayableView.bind(this);
        this.animatedValue = new Animated.Value(0);
    }

    getDisplayableView(id) {
        const { businessEntities } = this.props;
        let view;

        switch (id) {
            case LIST:
                view = <BusinessEntitiesListView businessEntities={businessEntities} />;
                break;
            case DETAILS:
                view = <BusinessEntityDetailsView businessEntity={{ str: 1 }} />;
                break;
            default:
                view = <View />;
                break;
        }

        return <Animated.View key={id} style={[styles.displayableView, this.interpolation(id)]}>{view}</Animated.View>
    }

    interpolation(id) {
        const { width } = Dimensions.get('window');
        const translateX = this.animatedValue.interpolate({
            inputRange: [id - 1, id, id + 1],
            outputRange: [width, 0, (-1 * width) / 5]
        });

        return { transform: [{translateX}] };
    }

    componentWillUpdate(nextProps) {
        const index = this.props.navigationIndex;
        const newIndex = nextProps.navigationIndex;

        if (index !== newIndex) {
            Animated.timing(this.animatedValue, { toValue: newIndex }).start();
        }
    }

    render() {
        const { navigationStack } = this.props;

        return (
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ flex: 1 }}>
                    { navigationStack.map(this.getDisplayableView) }
                </View>
                <TouchableOpacity onPress={() => this.props.navigate(DETAILS)}>
                    <View>
                        <Text>Go</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.back()}>
                    <View>
                        <Text>Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

App.displayName = 'App';

const styles = StyleSheet.create({
    displayableView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
});

function mapStateToProps(state) {
    return {
        businessEntities: state.businessEntities.businessEntities,
        navigationStack: state.navigation.stack,
        navigationIndex: state.navigation.index
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: view => dispatch({ type: NAVIGATE, view }),
        back: view => dispatch({ type: BACK, view })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);