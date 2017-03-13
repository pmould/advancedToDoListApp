import *  as actions from '../constants/actionTypes';

export const addTodo = (todo)=> ({type: actions.ADD_TODO, payload: todo});

export const editTodoTitle = (title, id)=> ({type: actions.EDIT_TODO_TITLE, payload: {title, id}});

export const filterTodos = (filter) => ({type: actions.FILTER_TODOS, payload: filter});

export const updateTodoChecked = (checked, id) => ({type: actions.UPDATE_TODO_CHECKED, payload: {checked, id}});

export const completeAllTodos = (checked) => ({type: actions.COMPLETE_ALL_TODOS, payload: checked});

export const removeTodos = (todosListById) => ({type: actions.REMOVE_TODOS, payload: todosListById});

export const removeTodo = (id) => ({type: actions.REMOVE_TODO, payload: id});

export const resetTodos = () => ({type: actions.RESET_TODOS});