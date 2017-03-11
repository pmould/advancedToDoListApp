import React from 'react';
import Filters from './Filters';
import {List} from 'immutable';
class Footer extends React.Component {

    getCheckedTodos() {
            const {todos} = this.props;
            return todos.reduce((todos, todo) => {
                if (todo.completed) {
                    return todos.push(todo.id);
                }
                return todos;
            }, List());
    }

    render() {
        const {actions, todos} = this.props;
        return (
            <div className="row footer__container">
                <Filters {...this.props}/>
                <span className="btn">
                <span className="btn" onClick={() => actions.removeTodos(this.getCheckedTodos())}>Clear</span>
                <span className="btn">Clear All</span>
                </span>

            </div>
        );
    }
}

export default Footer;