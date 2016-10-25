import React from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import BusinessEntityListItemView from './BusinessEntitiesListItemView.js';
import TopHeader from './TopHeader.js';

class BusinessEntitiesListView extends React.Component {
    constructor(props) {
        super(props);

        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {};
    }

    render() {
        const clonedDataSource = this.dataSource.cloneWithRows(this.props.businessEntities);
        const style = StyleSheet.create({
            baseView: {
                backgroundColor: '#f8f8f8',
                flex: 1
            },
            listView: {
                marginTop: 30,
            },
        });

        if (this.state.currentPosition !== undefined) {
            return (
                <View style={style.baseView}>
                    <TopHeader title="רעבים ברעבך" />
                    <ListView
                        dataSource={clonedDataSource}
                        renderRow={
                            (rowData) =>
                                <BusinessEntityListItemView
                                    {...rowData}
                                    currentPosition={this.state.currentPosition}
                                    onSelect={() => this.props.onSelect(rowData)}
                                />
                        }
                        style={style.listView}
                    />
                </View>
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

BusinessEntitiesListView.displayName = 'BusinessEntitiesListView';

export default BusinessEntitiesListView;