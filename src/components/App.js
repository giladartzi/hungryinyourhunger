import React from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import BusinessEntityListItemView from './BusinessEntityListItemView.js'

const styles = StyleSheet.create({
    mainView: {
        paddingTop: 20
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {};
        console.log(props.businessEntities);
    }

    render() {
        const clonedDataSource = this.dataSource.cloneWithRows(this.props.businessEntities);

        if (this.state.currentPosition !== undefined) {
            return (
                <ListView
                    dataSource={clonedDataSource}
                    renderRow={
                        (rowData) =>
                            <BusinessEntityListItemView {...rowData} currentPosition={this.state.currentPosition} />
                    }
                    style={styles.mainView}
                />
            );
        }

        // TODO(Miki): Add location watcher
        navigator.geolocation.getCurrentPosition(
            (position) => this.setState({currentPosition: position}),
            (error) => this.setState({currentPosition: null}),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );

        return null;
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