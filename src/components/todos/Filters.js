import React from 'react';

class Filters extends React.Component {
    filterClick = (filter) => {
            this.props.actions.filterTodos(filter);
        }

    render() {
        const {filterState} = this.props;
        return (
            <span>
                <span className={filterState==='all'? 'btn btn--filter filter-selected': 'btn btn--filter'} onClick={this.filterClick.bind(null, 'all')}>All</span>
                <span className={filterState==='not-completed'? 'btn btn--filter filter-selected': 'btn btn--filter'} onClick={this.filterClick.bind(null, 'not-completed')}>Active</span>
                <span className={filterState=== 'completed'? 'btn btn--filter filter-selected': 'btn btn--filter'} onClick={this.filterClick.bind(null, 'completed')}>Inactive</span>
                {" "}
            </span>
        );
    }
}

export default Filters;
