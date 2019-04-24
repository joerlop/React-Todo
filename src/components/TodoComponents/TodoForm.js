import React from 'react';
import './Todo.scss';

function TodoForm(props) {
  return (
    <form onSubmit={props.add}>
      <input
        placeholder="todo"
        value={props.value}
        onChange={props.change}
        name="todo"
      />
      <button onClick={props.add}>Add todo</button>
      <button onClick="">Clear completed</button>      
    </form>
  );
}

export default TodoForm;