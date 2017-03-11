import React from 'react';

class Filters extends React.Component {
    render() {
        return (
            <span>
                Filters:
                <span className="btn">All</span>
                <span className="btn">Completed</span>
                <span className="btn">Not Completed</span>
            </span>
        );
    }
}

export default Filters;
