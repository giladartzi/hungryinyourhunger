import { expect } from 'chai';
import businessEntitiesReducer, {
    GET_BUSINESS_ENTITIES_REQUEST,
    GET_BUSINESS_ENTITIES_SUCCESS,
    GET_BUSINESS_ENTITIES_FAILURE
} from '../../reducers/businessEntitiesReducer';

describe('Business Entities Reducer', () => {
    it('Should have the correct initial state', () => {
        const state = businessEntitiesReducer(undefined, { type: null })
        expect(state).to.deep.equal({
            error: null,
            businessEntities: [],
            isPending: false
        });
    });

    it('Should indicate upon request', () => {
        const state = businessEntitiesReducer(undefined, { type: GET_BUSINESS_ENTITIES_REQUEST });
        expect(state).to.deep.equal({
            error: null,
            businessEntities: [],
            isPending: true
        });
    });

    it('Should save payload upon success', () => {
        const state = businessEntitiesReducer(undefined, { type: GET_BUSINESS_ENTITIES_SUCCESS, payload: [1] });
        expect(state).to.deep.equal({
            error: null,
            businessEntities: [1],
            isPending: false
        });
    });

    it('Should indicate upon error', () => {
        const state = businessEntitiesReducer(undefined, { type: GET_BUSINESS_ENTITIES_FAILURE, error: 'Error' });
        expect(state).to.deep.equal({
            error: 'Error',
            businessEntities: [],
            isPending: false
        });
    });

});