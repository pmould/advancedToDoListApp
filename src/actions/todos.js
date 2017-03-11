import *  as actions from '../constants/actionTypes';

export const addTodo = (todo)=> ({type: actions.ADD_TODO, payload: todo});