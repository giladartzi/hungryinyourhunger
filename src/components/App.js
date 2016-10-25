import React from 'react';
import { View, Text, Dimensions, Animated, StyleSheet, Easing } from 'react-native';
import { connect } from 'react-redux';
import BusinessEntitiesListView from './BusinessEntitiesListView.js';
import BusinessEntityDetailsView from './BusinessEntityDetailsView.js';
import { LIST, DETAILS, NAVIGATE, BACK } from '../reducers/navigationReducer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.getDisplayableView = this.getDisplayableView.bind(this);
        this.animatedValue = new Animated.Value(0);
    }

    getDisplayableView(id) {
        const { businessEntities, navigationData } = this.props;
        let view;

        switch (id) {
            case LIST:
                view = <BusinessEntitiesListView
                    businessEntities={businessEntities}
                    onSelect={(businessEntity) => this.props.navigate(DETAILS, businessEntity)}
                />;
                break;
            case DETAILS:
                view = <BusinessEntityDetailsView businessEntity={navigationData} onBackClick={this.props.back} />;
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
            outputRange: [-1 * width, 0, width / 5]
        });

        return { transform: [{translateX}] };
    }

    componentWillUpdate(nextProps) {
        const index = this.props.navigationIndex;
        const newIndex = nextProps.navigationIndex;

        if (index !== newIndex) {
            Animated.timing(this.animatedValue, { easing: Easing.out(Easing.quad), toValue: newIndex }).start();
        }
    }

    render() {
        const { navigationStack } = this.props;

        return (
            <View style={{ flex: 1 }}>
                { navigationStack.map(this.getDisplayableView) }
            </View>
        );

        return null;
    }
}

App.displayName = 'App';

const styles = StyleSheet.create({
    displayableView: {
        position: 'absolute',
        top: 20,
        bottom: 0,
        left: 0,
        right: 0
    }
});

function mapStateToProps(state) {
    return {
        businessEntities: state.businessEntities.businessEntities,
        navigationStack: state.navigation.stack,
        navigationIndex: state.navigation.index,
        navigationData: state.navigation.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: (view, data) => dispatch({ type: NAVIGATE, view, data }),
        back: () => dispatch({ type: BACK })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);