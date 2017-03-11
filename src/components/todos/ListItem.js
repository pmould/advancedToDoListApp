import React from 'react';
import {updateTodoChecked} from '../../actions/todos';
class ListItem extends React.Component {
    update
    render() {
        const {actions} = this.props;
        return (
            <div className="row row--list-item">
                <input className="list-item__checkbox" type="checkbox" onChange={(e) => actions.updateTodoChecked(e.target.checked, this.props.todo.id)} checked={this.props.todo.completed}/>
                { }
                <span>
                    {this.props.todo.title}
                </span>
            </div>
        );
    }
}

export default ListItem;