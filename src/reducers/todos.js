import * as actions from '../constants/actionTypes';
import {List} from 'immutable';
export default (state = getInitialState(), action) => {
    switch(action.type) {
        case actions.ADD_TODO:
            const todo = action.payload;

            return state.push(todo);
        case actions.UPDADE_TODO_CHECKED:
        const {id, checked} = action.payload;
            return state.map((todo) => {
                if (todo.id === id) {
                    todo.completed = checked;
                    return todo;
                }
                return todo;
            });
        default: return state; 
    }
}

const getInitialState = () => {
    return List();
}