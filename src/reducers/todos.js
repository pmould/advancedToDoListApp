import * as actions from '../constants/actionTypes';
import {List} from 'immutable';
export default (state = getInitialState(), action) => {
    switch(action.type) {
        case actions.ADD_TODO:
            const todo = action.payload;
            
            return state.push(todo);
        default: return state; 
    }
}

const getInitialState = () => {
    return List();
}