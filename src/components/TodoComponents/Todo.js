import React from 'react';
import './Todo.scss';

function Todo(props) {
  return (
    <div className={`completed-${props.todoProp.completed}`} onClick={() => props.completeProp(props.todoProp.id)}>
      {props.todoProp.task}
    </div>      
  );
}
  
  export default Todo;
