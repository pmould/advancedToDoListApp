import React from 'react';
import Filters from './Filters';
import {List} from 'immutable';
class Footer extends React.Component {

    getCheckedTodos(todos, filterState) {
            return todos.reduce((todos, todo) => {
                if (todo.get('completed')) {
                    return todos.push(todo.get('id'));
                }
                return todos;
            }, List());
    }

    checkIfOneSelected(todos, filterState) {
            return todos.find(todo => todo.get('completed') && (filterState === 'completed' || filterState === 'all'));
    }
    render() {
        const {actions, todos, filterState} = this.props;
        const filterSize = todos.filter(todo => !todo.get('completed')).size;
        return (
            <div className="row footer__container">
                <span>{filterSize} item{filterSize? 's':''} left</span>
                <Filters {...this.props}/>
                <span className="btn">
                {this.checkIfOneSelected(todos, filterState) && <span className="btn" onClick={() => actions.removeTodos(this.getCheckedTodos(todos, filterState))}>Clear Completed</span>}
                <span className="btn" onClick={actions.resetTodos}>Reset</span>
                </span>
            </div>
        );
    }
}

export default Footer;