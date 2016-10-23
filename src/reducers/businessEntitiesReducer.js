export const GET_BUSINESS_ENTITIES_REQUEST = 'GET_BUSINESS_ENTITIES_REQUEST';
export const GET_BUSINESS_ENTITIES_SUCCESS = 'GET_BUSINESS_ENTITIES_SUCCESS';
export const GET_BUSINESS_ENTITIES_FAILURE = 'GET_BUSINESS_ENTITIES_FAILURE';
import request from '../utils/api.js'

export const getBusinessEntities = dispatch => {
    dispatch({
        type: GET_BUSINESS_ENTITIES_REQUEST,
        pageSize: 20,
        pageIndex: 0
    });

    const apiCall = request('/businessEntities');

    apiCall.then(payload => dispatch({ type: GET_BUSINESS_ENTITIES_SUCCESS, payload }))
        .catch(error => dispatch({ type: GET_BUSINESS_ENTITIES_FAILURE, error }));
};

export const INITIAL_STATE = {
    isPending: false,
    error: null,
    businessEntities: []
};

export default function businessEntitiesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_BUSINESS_ENTITIES_REQUEST:
            return {
                ...state,
                isPending: true,
                error: null,
                businessEntities: []
            };
        case GET_BUSINESS_ENTITIES_SUCCESS:
            return {
                ...state,
                isPending: false,
                businessEntities: action.payload
            };
        case GET_BUSINESS_ENTITIES_FAILURE:
            return { ...state, isPending: false, error: action.error };
        default:
            return state;
    }
}