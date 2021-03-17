import React from 'react';
import './Todo.css';

const Todo = ({ id, task, deleteTask }) => {
  return (
    <div className="Todo">
      <button onClick={() => deleteTask(id)}>X</button>
      <p>{task}</p>
    </div>
  )
}

export default Todo;
