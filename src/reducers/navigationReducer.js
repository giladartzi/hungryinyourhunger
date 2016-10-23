import _ from 'lodash';

export const BACK = 'BACK';
export const NAVIGATE = 'NAVIGATE';

export const LIST = 0;
export const DETAILS = 1;

const INITIAL_STATE = {
    stack: [LIST],
    index: 0
};

export default function navigationReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case BACK:
            return {
                ...state,
                index: Math.max(0, state.index - 1)
            };
        case NAVIGATE:
            const stack = _.without(state.stack, action.view).concat(action.view);
            return {
                ...state,
                stack,
                index: Math.min(stack.length - 1, state.index + 1)
            };
        default:
            return state;
    }
}