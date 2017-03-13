import * as actions from '../constants/actionTypes';

export default (state = getInitialState(), action) => {
    switch(action.type) {
        case actions.FILTER_TODOS:
            return action.payload;
        case actions.ADD_TODO:
            return 'all';
        default: return state; 
    }
}

const getInitialState = () => {
    return 'all';
}