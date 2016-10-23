import React from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        console.log(props.businessEntities);
    }

    render() {
        const clonedDataSource = this.dataSource.cloneWithRows(this.props.businessEntities);

        return (
            <ListView dataSource={clonedDataSource} renderRow={(rowData) => <Text key={rowData.id}>{rowData.name}</Text>}/>
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