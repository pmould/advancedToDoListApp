import React from 'react';
import ListItem from './ListItem';
import {List} from 'immutable';

class ListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editable: false, editText: '', id: null};
    }

    isEditable(id) {
        return this.state.id === id;
    }

    updateTodo = (title) => {
        this.setState({editText: title})
    }

    clearState = () => {
        this.setState({editable: false, editText: '', id: null});
    }

     render() {
         const {filterState, todos} = this.props;

        return (
            <div className="list-item__container">
                {todos.size > 0 && todos.reverse().reduce((todosList, todo, index) => {
                    return (
                    (filterState === 'all'
                    || filterState === 'not-completed' && todo.get('completed') == false 
                    || filterState === 'completed' && todo.get('completed') == true)
                    ? todosList.push(<ListItem key={todo.get('id')} editable={this.isEditable(todo.get('id'))} key={todo.get('id')} todo={todo} {...{...this.props, state: this.state}} updateTodo={this.updateTodo} clearState={this.clearState} />): todosList);
                }, List())}
            </div>
        );
    }
}

export default ListItems;