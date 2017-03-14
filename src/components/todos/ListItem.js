import React from 'react';

class ListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    editTodos = (title) => {
        const {todo, actions, clearState} = this.props;
        actions.editTodoTitle(title, todo.get('id'));
        clearState(); 
    }

    onBlur = (e) => {
        this.editTodos(e.target.value);
    }

    onKeyDown = (e) => {
        e.keyCode === 13 && this.editTodos(e.target.value);
    }

    render() {
        const {actions, todo, editable, state: {editText}, editTodo, updateTodo} = this.props;


        return (
            <div onDoubleClick={(e) => {editTodo(todo)}} className="row row--list-item">
                {editable ?
                <input className="edit-item edit-item--input" autoFocus="true" type="text" onBlur={this.onBlur} onKeyDown={this.onKeyDown} onChange={(e) => updateTodo(e.target.value)} value={editText}/>
                :
                [<input key='check' className="list-item__checkbox" type="checkbox" onDoubleClick={e => e.stopPropagation()} onChange={(e) => actions.updateTodoChecked(e.target.checked, todo.get('id'))} checked={todo.get('completed')}/>,
                    <span key='edit-item' className="edit-item" style={{textDecoration: (todo.get('completed')) ? 'line-through': 'initial', color: (todo.get('completed')) ? 'gray': 'black'}}>
                    {todo.get('title')}
                </span>,
                <span className="cancel-item" key='cancel-item' onClick={e => actions.removeTodo(todo.get('id'))}>X</span>]
                }
            </div>
        );
    }
}

export default ListItem;