import React from 'react';
import { View, Text } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import businessEntities, { getBusinessEntities } from './reducers/businessEntitiesReducer';
import navigation from './reducers/navigationReducer';
import App from './components/App.js';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
    businessEntities,
    navigation
}), applyMiddleware(createLogger(), thunk));

store.dispatch(getBusinessEntities);

export class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

Index.displayName = 'Index';

export default Index;