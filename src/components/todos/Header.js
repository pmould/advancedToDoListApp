import React from 'react';
import {Map} from 'immutable';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentText: ''};
        this.id = 0;
    }

    handleSubmit(e) {
        const {actions} = this.props;
        e.preventDefault();
        actions.addTodo(Map({title: this.state.currentText, completed: false, id: this.id++}));
        this.setState({currentText: ''});
    }

    render() {
        const {actions, todos} = this.props;
        return(
                <form className="row header__wrapper" onSubmit={(e)=> {this.handleSubmit(e)}}>
                    <input type="checkbox" className={!todos.size ? 'hidden': ''} onChange={e => actions.completeAllTodos(e.target.checked)}/>
                    <input onChange={(e) => {this.setState({currentText: e.target.value})}} className="header__input" type="text" placeholder="Enter a Todo Item" value={this.state.currentText}/>
                {" "}
                    <input className="btn" type="submit" value="Add item" />
            </form>
        );
    }
}

export default Header;