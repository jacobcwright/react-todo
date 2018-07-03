import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class App extends Component {
  state = { 
    todos: [
      { id: 1, title: "buy milk"},
      { id: 2, title: "buy cereal"},
      {id: 3, title: "get paper"},
      {id: 4, title: "clean room"},
      {id:5, title: "drink water"},
     ] 
    }

    getUniqueId = () => {
      const {todos} = this.state;
      return todos.count++;
    }

    addTodo = (title) => {
      const { todos } = this.state;
      const todo = { id: this.getUniqueId(), title };
      this.setState({ todos: [todo, ...todos]})
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoForm addTodo={this.addTodo} />
         <TodoList todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
