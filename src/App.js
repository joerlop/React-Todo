import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

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

  render() {
    return (
      <div>
        <h1>To-do!</h1>
        <TodoList todoList={this.state.todosOnState}/>
        <TodoForm 
          change={this.handleChanges} 
          value={this.state.todo.task}
          add={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
