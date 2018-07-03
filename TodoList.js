import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

    render () {
        const { todos } = this.props;
        
        return (
            <div>
            { todos.map( t => {
                return (
                    <Todo key={t.id} title = {t.title} />                )
                }) }
            </div>
        )
    }
}

export default TodoList;