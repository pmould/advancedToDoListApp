import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div className="row row--list-item">
                <input className="list-item__checkbox" type="checkbox" checked={this.props.todo.completed}/>
                { }
                <span>
                    {this.props.todo.title}
                </span>
            </div>
        );
    }
}

export default ListItem;