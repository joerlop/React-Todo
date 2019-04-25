import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import './App.scss';

const todoArray = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, 
  //and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todosOnState: todoArray,
      todo: {
        task: "",
        id: "",
        completed: false,
      }
    }
  }

  handleChanges = event => {
    this.setState({
      todo: {
        ...this.state.todo,
        task: event.target.value,
        id: Date.now(),
      }
    })
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todosOnState: [...this.state.todosOnState, this.state.todo],
      todo: {
        task: "",
        id: "",
        completed: false,
      }
    });
  };

  completeTodo = id => {
    console.log("Hola");
    let oldState = this.state.todosOnState;
    let newState = oldState.map(todo => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    this.setState({todosOnState: newState});
  }

  clearCompleted = event => {
    event.preventDefault();
    let oldState = this.state.todosOnState;
    let newState = oldState.filter(todo => todo.completed == false)
    this.setState({todosOnState: newState});
  }

  render() {
    return (
      <div className="app-container">
        <h1>To-do!</h1>
        <TodoList 
          todoList={this.state.todosOnState}
          complete={this.completeTodo}
        />
        <TodoForm 
          change={this.handleChanges} 
          value={this.state.todo.task}
          add={this.addTodo}
          clear={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
