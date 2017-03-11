import React from 'react';
import Filters from './Filters';

class Footer extends React.Component {

    render() {
        return (
            <div className="row footer__container">
                <Filters {...this.props}/>
                <span className="btn">
                <span className="btn">Clear</span>
                <span className="btn">Clear All</span>
                </span>

            </div>
        );
    }
}

export default Footer;