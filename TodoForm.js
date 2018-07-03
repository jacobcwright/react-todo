import React, { Component } from 'react';

class TodoForm extends Component  {
    state = { title: "" }

    handleChange = (e) => {
        this.setState({ title: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // add it to the backend
        this.props.addTodo(this.state.title)
        this.setState({title: ""})
    }

    render(){
        const { title } = this.state
        return (
            <div>
                <form onSubmit= { this.handleSubmit } >
                    <input 
                    name="title"
                    value={ title }
                    onChange={this.handleChange}
                    required
                    placeholder="put your todos here"
                    />
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;