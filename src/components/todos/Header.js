import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentText: ''};
        this.id = 0;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.actions.addTodo({title: this.state.currentText, completed: false, id: this.id++});
        this.setState({currentText: ''});
    }

    render() {
        return(
                <form className="row header__wrapper" onSubmit={(e)=> {this.handleSubmit(e)}}>
                <input onChange={(e) => {this.setState({currentText: e.target.value})}} className="header__input" type="text" placeholder="Enter a Todo Item" value={this.state.currentText}/>
                {" "}
                <input className="btn" type="submit" value="Add item" />
            </form>
        );
    }
}

export default Header;