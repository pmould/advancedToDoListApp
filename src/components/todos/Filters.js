import React from 'react';

class Filters extends React.Component {
    filterClick = (filter) => {
            this.props.actions.filterTodos(filter);
        }

    render() {
        return (
            <span>
                Filters:
                <span className="btn btn--filter" onClick={this.filterClick.bind(null, 'all')}>All</span>
                <span className="btn btn--filter" onClick={this.filterClick.bind(null, 'completed')}>Completed</span>
                <span className="btn btn--filter" onClick={this.filterClick.bind(null, 'not-completed')}>Not Completed</span>
            </span>
        );
    }
}

export default Filters;
