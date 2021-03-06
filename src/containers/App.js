import React from 'react';
import 'normalize.css/normalize.css';
import '../styles/index.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoListPage from '../components/todos/Page';
import * as actions from '../actions/todos';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TodoListPage {...this.props} />
        );
    }
}

const select = (state) => {
    return {
        todos: state.todos,
        filterState: state.filters
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(select, mapDispatchToProps)(App);