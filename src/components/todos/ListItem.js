import React from 'react';

class ListItem extends React.Component {
    update
    render() {
        const {actions, todo} = this.props;
        return (
            <div className="row row--list-item">
                <input className="list-item__checkbox" type="checkbox" onChange={(e) => actions.updateTodoChecked(e.target.checked, todo.id)} checked={this.props.todo.completed}/>
                <span style={{textDecoration: (todo.completed) ? 'line-through': 'initial'}}>
                    {this.props.todo.title}
                </span>
            </div>
        );
    }
}

export default ListItem;