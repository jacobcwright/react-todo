import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Footer from './Footer';

class App extends Component {
  state = { 
    todos: [ 
      { id: 1, title: "buy milk", complete: false }, 
      { id: 2, title: "buy cereal", complete: false },
      { id: 3, title: "get paper", complete: false },
      { id: 4, title: "clean room", complete: false },
      { id: 5, title: "drink water", complete: false },
    ],
    filter: "All" 
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }
  
  getUniqId = () => {
    const { todos } = this.state;
    return todos.count++;
  }

  addTodo = (title) => {
    const { todos } = this.state;
    const todo = { id: this.getUniqId(), title };
    this.setState({ todos: [ todo, ...todos]})
  }

handleClick = (id) => {
  const { todos } = this.state;
  this.setState({
    todos: todos.map( todo => {
      if (todo.id === id){
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })
  })
}

  render() {
    const { todos, filter } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={todos} todoClick={this.handleClick}/>
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;
