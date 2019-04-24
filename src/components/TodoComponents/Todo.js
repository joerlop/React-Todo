import React from 'react';
import './Todo.scss';

function Todo(props) {
  return (
    <p>{props.todoProp.task}</p>      
  );
}
  
  export default Todo;
