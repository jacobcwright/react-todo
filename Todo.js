import React from 'react';


const styles = {
  todo: {
    cursor: 'pointer',
  },
  complete: {
    color: 'grey',
    textDecoration: 'line-through',
  }
}


const Todo = ({ id, key, title, complete, todoClick }) => (
  <p 
  key={key}
  id={id}
  style={ complete ? {...styles.todo, ...styles.complete } : styles.todo }
    onClick={ () => todoClick(id) }
    >
    -{title} 
    </p>
)

export default Todo;