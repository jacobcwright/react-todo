import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

  render() {
    const { todos, todoClick } = this.props;

    return (
      <div>
        { todos.map( t => {
          return (
            <Todo key={t.id} id={t.id} title={t.title} complete={t.complete} todoClick={todoClick} />
          )
        }) }
      </div>
    )
  }
}

export default TodoList;
