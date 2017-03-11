import *  as actions from '../constants/actionTypes';

export const addTodo = (todo)=> ({type: actions.ADD_TODO, payload: todo});

export const filterTodos = (filter) => ({type: actions.FILTER_TODOS, payload: filter});

export const updateTodoChecked = (checked, id) => ({type: actions.UPDATE_TODO_CHECKED, payload: {checked, id}});

export const removeTodos = (todosListById) => ({type: actions.REMOVE_TODOS, payload: todosListById});