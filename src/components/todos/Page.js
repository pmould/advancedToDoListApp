import React from 'react';
import Header from './Header';
import ListItems from './ListItems';
import Footer from './Footer';
import {List} from 'immutable';
class Page extends React.Component {
    render() {
         const {filterState, todos} = this.props;

        return (
            <div className="container col">
                <div className="todo-container">
                    <div className="row title__container">
                        <h1>Todo List App</h1>
                    </div>
                    <div className="app__container">
                        <Header {...this.props}/>
                        {todos.size > 0 &&
                        [<ListItems {...this.props}/>,
                        <Footer {...this.props}/>]}
                    </div>
                    <div className="page-footer">
                        Created by <a target="_blank" href='http://pmouldeveloper.co'>Paul Mould</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Page;