import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import SearchForm from "./components/TodoComponents/SearchForm";

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
      },
      todoOnSearch: {
        value: "",
      },
      todosBeforeSearch: []
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

  handleSearch = event => {
    this.setState({
      todoOnSearch: {
        value: event.target.value,
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

    
    localStorage.setItem("todosOnState", JSON.stringify(this.state.todosOnState));
    localStorage.setItem("todo", JSON.stringify(this.state.todo));
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

    localStorage.setItem("todosOnState", JSON.stringify(newState));
  }

  clearCompleted = event => {
    event.preventDefault();
    let oldState = this.state.todosOnState;
    let newState = oldState.filter(todo => todo.completed == false)
    let oldSearchState = this.state.todosBeforeSearch;
    let newSearchState = oldSearchState.filter(todo => todo.completed == false)

    this.setState({
      todosOnState: newState,
      todosBeforeSearch: newSearchState
    });
    localStorage.setItem("todosOnState", JSON.stringify(newState));
  }

  search = event => {
    event.preventDefault();
    let oldState = this.state.todosOnState;
    let newState = oldState.filter(todo => todo.task === this.state.todoOnSearch.value)
    this.setState({
      todosOnState: newState,
      todosBeforeSearch: oldState
    });
    console.log(this.state.todosBeforeSearch)
    
    localStorage.setItem("todosOnState", JSON.stringify(newState));
  }

  goBack = event => {
    event.preventDefault();
    console.log("Hola");
    this.setState({
      todosOnState: this.state.todosBeforeSearch,
      todosBeforeSearch: {}
    })
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
 }

  render() {
    return (
      <div className="app-container">
        <h1>To-do!</h1>
        <SearchForm 
          search={this.search}
          change={this.handleSearch}
          value={this.state.todoOnSearch.value}
          back={this.goBack}
        />
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
