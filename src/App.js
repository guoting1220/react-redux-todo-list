import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';


function App() {
  const todos = useSelector(store => store.todos);
  const dispatch = useDispatch();

  const addTask = (newTask) => {
    dispatch({ type: "ADD_TASK", newTask })
  }

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", id })
  }

  return (
    <div className="App">
      <NewTodoForm addTask={addTask} />
      <TodoList todos={todos} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
