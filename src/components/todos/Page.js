import React from 'react';
import Header from './Header';
import ListItem from './ListItem';
import Footer from './Footer';

class Page extends React.Component {
    render() {
        return (
            <div className="container col">
                <div className="todo-container">
                    <div className="row title__container">
                        <h1>Todo List App</h1>
                    </div>
                    <div className="app__container">
                        <Header {...this.props}/>
                        <div className="list-item__container">
                            {this.props.todos.map((todo, index) => {
                                return (
                                (this.props.filterState === 'all'
                                || this.props.filterState === 'not-completed' && todo.completed == false 
                                || this.props.filterState === 'completed' && todo.completed == true)
                                ? <ListItem key={todo.id} todo={todo} {...this.props}/>: null);
                            })}
                        </div>
                        <Footer {...this.props}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Page;