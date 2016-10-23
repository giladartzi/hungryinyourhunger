import React from 'react';
import { ListView, Text } from 'react-native';

class BusinessEntitiesListView extends React.Component {
    constructor(props) {
        super(props);

        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    render() {
        const clonedDataSource = this.dataSource.cloneWithRows(this.props.businessEntities);

        return (
            <ListView dataSource={clonedDataSource} renderRow={(rowData) => <Text key={rowData.id}>{rowData.name}</Text>}/>
        );
    }
}

BusinessEntitiesListView.displayName = 'BusinessEntitiesListView';

export default BusinessEntitiesListView;