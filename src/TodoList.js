import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todos, deleteTask }) => {
  return (
    <div className="TodoList">
      <h3>Todo List:</h3>
      <div className="TodoList-todos">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            deleteTask={() => deleteTask(todo.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList;