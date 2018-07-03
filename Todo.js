import React from 'react';

const Todo = ({ id, title }) => (
    <p key={id}>- {title}</p>
)

export default Todo;