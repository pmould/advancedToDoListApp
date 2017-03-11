import todos from './todos';
import filters from './filters';
import {combineReducers} from 'redux';

export default combineReducers({
    todos,
    filters
});