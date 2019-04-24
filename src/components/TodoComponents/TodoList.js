// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.scss';

import Todo from "./Todo";

function TodoList(props) {
  return (
    props.todoList.map(todo => {
      return <Todo todoProp={todo}/>
    })
  );
}

export default TodoList;