import * as actions from '../constants/actionTypes';
import {Map, OrderedMap} from 'immutable';
export default (state = getInitialState(), action) => {
    switch(action.type) {
        case actions.ADD_TODO:
            const todo = action.payload;

            return state.set(todo.get('id'), Map(todo));
        case actions.UPDATE_TODO_CHECKED:
        const {id, checked} = action.payload;
            return state.map((todo) => {
                if (todo.get('id') === id) {
                   return todo.set('completed', checked);
                }
                return todo;
            });
        case actions.COMPLETE_ALL_TODOS:
            return state.map(todo => {
                return todo.set('completed', action.payload);
            });
        case actions.EDIT_TODO_TITLE:
            const {title, id:editId} = action.payload;
            return state.setIn([editId, 'title'], title);
        case actions.REMOVE_TODOS:
            const newState = state;
            action.payload.forEach((id) => {
                newState = newState.delete(id);
            });
            return newState;
        case actions.REMOVE_TODO:
            return state.remove(action.payload);
            action.payload;
        case actions.RESET_TODOS:
            return getInitialState();
        default: return state; 
    }
}

const getInitialState = () => {
    return OrderedMap();
}